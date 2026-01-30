
const net = require('net');

async function testPort(host, port) {
    return new Promise((resolve) => {
        console.log(`\nConnecting to ${host}:${port}...`);
        const socket = new net.Socket();
        
        socket.setTimeout(5000);
        
        socket.on('connect', () => {
            console.log(`✅ SUCCESS: Port ${port} is open on ${host}`);
            socket.destroy();
            resolve(true);
        });
        
        socket.on('timeout', () => {
            console.log(`❌ TIMEOUT: Could not reach ${host}:${port}`);
            socket.destroy();
            resolve(false);
        });
        
        socket.on('error', (err) => {
            console.log(`❌ ERROR: ${err.message}`);
            resolve(false);
        });
        
        socket.connect(port, host);
    });
}

async function main() {
    console.log("=== RAW NETWORK TEST ===");
    await testPort('62.72.13.122', 3306);
    await testPort('127.0.0.1', 3306);
    await testPort('localhost', 3306);
}

main();
