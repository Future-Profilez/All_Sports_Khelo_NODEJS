
const net = require('net');
const fs = require('fs');
const mariadb = require('mariadb');
require('dotenv').config();

async function checkTcp(host, port) {
    return new Promise((resolve) => {
        console.log(`\nTesting TCP -> ${host}:${port}...`);
        const socket = new net.Socket();
        const start = Date.now();
        
        socket.setTimeout(5000);
        
        socket.on('connect', () => {
            console.log(`✅ TCP Connected in ${Date.now() - start}ms`);
            socket.destroy();
            resolve(true);
        });
        
        socket.on('timeout', () => {
            console.log(`❌ TCP Timeout after 5000ms`);
            socket.destroy();
            resolve(false);
        });
        
        socket.on('error', (err) => {
            console.log(`❌ TCP Error: ${err.message}`);
            resolve(false);
        });
        
        socket.connect(port, host);
    });
}

async function checkSocket(socketPath) {
    if (!fs.existsSync(socketPath)) {
        return false;
    }
    return new Promise((resolve) => {
        console.log(`\nTesting Socket -> ${socketPath}...`);
        const socket = new net.Socket();
        
        socket.on('connect', () => {
            console.log(`✅ Socket Connected!`);
            socket.destroy();
            resolve(true);
        });
        
        socket.on('error', (err) => {
            console.log(`❌ Socket Error: ${err.message}`);
            resolve(false);
        });
        
        socket.connect(socketPath);
    });
}

async function testDbConnection(config, label) {
    console.log(`\nTrying DB Login [${label}]...`);
    // Mask password for logs
    const safeConfig = { ...config, password: '***' };
    console.log('Config:', JSON.stringify(safeConfig));

    const pool = mariadb.createPool({
        ...config,
        connectionLimit: 1,
        acquireTimeout: 5000
    });

    try {
        const conn = await pool.getConnection();
        console.log(`✅ DB Login SUCCESS!`);
        await conn.release();
        return true;
    } catch (err) {
        console.log(`❌ DB Login FAILED: ${err.message}`);
        if (err.code) console.log(`   Code: ${err.code}`);
        return false;
    } finally {
        await pool.end();
    }
}

async function main() {
    console.log("=== NETWORK DIAGNOSTICS ===");
    
    const host = process.env.DATABASE_HOST || 'localhost';
    const port = parseInt(process.env.DATABASE_PORT || 3306);
    
    // 1. TCP Checks
    await checkTcp('127.0.0.1', 3306);
    await checkTcp(host, port);
    
    // 2. Socket Search
    const potentialSockets = [
        '/var/run/mysqld/mysqld.sock',
        '/run/mysqld/mysqld.sock',
        '/tmp/mysql.sock',
        '/var/lib/mysql/mysql.sock'
    ];
    
    let validSocket = null;
    for (const s of potentialSockets) {
        if (fs.existsSync(s)) {
            console.log(`\nFound socket file at: ${s}`);
            if (await checkSocket(s)) {
                validSocket = s;
                break;
            }
        }
    }

    // 3. Credential Logic
    const rawPass = process.env.DATABASE_PASSWORD;
    let decodedPass = rawPass;
    try {
        if (rawPass.includes('%')) {
            decodedPass = decodeURIComponent(rawPass);
            console.log(`\nNote: DATABASE_PASSWORD contains '%'.`);
            console.log(`Raw: ${rawPass}`);
            console.log(`Decoded: ${decodedPass}`);
        }
    } catch (e) {}

    const user = process.env.DATABASE_USER;
    const db = process.env.DATABASE_NAME;

    // 4. Try connecting with best method
    if (validSocket) {
        console.log("\n>>> Attempting Socket Connection (Most Reliable) <<<");
        const success = await testDbConnection({
            socketPath: validSocket,
            user: user,
            password: decodedPass, // Try decoded first if likely encoded
            database: db
        }, "Socket + Decoded Pass");
        
        if (!success && rawPass !== decodedPass) {
             await testDbConnection({
                socketPath: validSocket,
                user: user,
                password: rawPass,
                database: db
            }, "Socket + Raw Pass");
        }
    } else {
        console.log("\n>>> Attempting TCP Connection <<<");
        // Try TCP
        await testDbConnection({
            host: '127.0.0.1',
            port: 3306,
            user: user,
            password: decodedPass,
            database: db
        }, "127.0.0.1 + Decoded Pass");
    }
}

main();
