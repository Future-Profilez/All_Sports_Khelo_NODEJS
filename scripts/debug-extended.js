
const mariadb = require('mariadb');
require('dotenv').config();

const REMOTE_HOST = '62.72.13.122';
const REMOTE_PORT = 3306;
const DB_USER = 'tk_ask_user'; 
let DB_PASS = process.env.DATABASE_PASSWORD;

// Decode if it looks encoded
if (DB_PASS && DB_PASS.includes('%')) {
    try { DB_PASS = decodeURIComponent(DB_PASS); } catch(e) {}
}

async function testLongTimeout() {
    console.log("=== EXTENDED TIMEOUT DIAGNOSIS ===");
    console.log(`Target: ${REMOTE_HOST}:${REMOTE_PORT}`);
    console.log(`User:   ${DB_USER}`);
    console.log(`Timeout: 30000ms (30 seconds)`);
    
    const pool = mariadb.createPool({
        host: REMOTE_HOST,
        port: REMOTE_PORT,
        user: DB_USER,
        password: DB_PASS,
        database: 'tenn_prod',
        acquireTimeout: 30000, // 30 seconds
        connectTimeout: 30000, // 30 seconds
        connectionLimit: 1
    });

    const start = Date.now();
    try {
        console.log("\n⏳ Initiating connection...");
        const conn = await pool.getConnection();
        const duration = Date.now() - start;
        console.log(`✅ Login SUCCESS!`);
        console.log(`⏱️  Handshake took: ${duration}ms`);
        
        if (duration > 5000) {
            console.log("\n⚠️  SLOW CONNECTION DETECTED!");
            console.log("   The server took more than 5 seconds to respond.");
            console.log("   This is usually caused by 'Skip Name Resolve' being DISABLED on the MySQL server.");
            console.log("   The server is trying to resolve your IP to a hostname and timing out.");
        }
        
        await conn.release();
    } catch (err) {
        const duration = Date.now() - start;
        console.log(`❌ Login FAILED after ${duration}ms:`);
        console.log(`   Error: ${err.message}`);
        console.log(`   Code:  ${err.code}`);
    } finally {
        await pool.end();
    }
}

testLongTimeout();
