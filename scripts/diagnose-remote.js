
const net = require('net');
const mariadb = require('mariadb');
require('dotenv').config();

const REMOTE_HOST = '62.72.13.122';
const REMOTE_PORT = 3306;
// Ensure we use the user that works in CLI
const DB_USER = 'tk_ask_user'; 
// Try to grab password from env, handle encoding if necessary
let DB_PASS = process.env.DATABASE_PASSWORD;
if (DB_PASS && DB_PASS.includes('%')) {
    try { DB_PASS = decodeURIComponent(DB_PASS); } catch(e) {}
}

async function testTcp() {
    return new Promise((resolve) => {
        console.log(`\n1. 📡 Testing TCP Connection to ${REMOTE_HOST}:${REMOTE_PORT}...`);
        const socket = new net.Socket();
        const start = Date.now();
        socket.setTimeout(5000); // 5s timeout

        socket.on('connect', () => {
            const time = Date.now() - start;
            console.log(`   ✅ TCP Connected successfully in ${time}ms!`);
            console.log(`      (This means network is OPEN and IP is whitelisted)`);
            socket.destroy();
            resolve(true);
        });

        socket.on('timeout', () => {
            console.log(`   ❌ TCP TIMEOUT after 5000ms.`);
            console.log(`      (Node.js cannot reach the server. Firewall?)`);
            socket.destroy();
            resolve(false);
        });

        socket.on('error', (err) => {
            console.log(`   ❌ TCP ERROR: ${err.message}`);
            resolve(false);
        });

        socket.connect(REMOTE_PORT, REMOTE_HOST);
    });
}

async function testDriver(ssl) {
    const label = ssl ? "SSL ENABLED" : "SSL DISABLED";
    console.log(`\n2. 🔑 Testing Database Login (${label})...`);
    console.log(`   User: ${DB_USER}`);
    
    const pool = mariadb.createPool({
        host: REMOTE_HOST,
        port: REMOTE_PORT,
        user: DB_USER,
        password: DB_PASS,
        database: 'tenn_prod',
        ssl: ssl, // Explicitly toggle SSL
        connectionLimit: 1,
        acquireTimeout: 5000
    });

    try {
        const conn = await pool.getConnection();
        console.log(`   ✅ Login SUCCESS with ${label}!`);
        await conn.release();
    } catch (err) {
        console.log(`   ❌ Login FAILED with ${label}:`);
        console.log(`      ${err.message}`);
    } finally {
        await pool.end();
    }
}

async function main() {
    console.log("=== REMOTE CONNECTION DIAGNOSIS ===");
    
    // Step 1: Network Layer
    const tcpSuccess = await testTcp();
    
    if (tcpSuccess) {
        // Step 2: Application Layer (only if network works)
        await testDriver(false); // Try without SSL first (most common issue)
        await testDriver(true);  // Try with SSL
    } else {
        console.log("\n⚠️  CRITICAL: TCP Connection failed.");
        console.log("    Since 'mysql' CLI works but Node.js fails, check:");
        console.log("    1. Is 'mysql' CLI connecting to localhost or the public IP? (Run 'mysql status' in CLI to check)");
        console.log("    2. Does your server have outgoing firewall rules blocking Node?");
    }
}

main();
