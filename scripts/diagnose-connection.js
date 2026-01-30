const fs = require('fs');
const path = require('path');
const net = require('net');
const { PrismaClient } = require('@prisma/client');
require('dotenv').config();

const LOG_FILE = path.join(__dirname, 'connection-diagnosis.log');
const logStream = fs.createWriteStream(LOG_FILE, { flags: 'a' });

function log(message) {
  const timestamp = new Date().toISOString();
  const logMsg = `[${timestamp}] ${message}`;
  console.log(message); // Print to console
  logStream.write(logMsg + '\n'); // Write to file
}

async function checkTcpConnection(host, port) {
  log(`\n🟡 [Network] Testing TCP connection to ${host}:${port}...`);
  return new Promise((resolve) => {
    const socket = new net.Socket();
    const timer = setTimeout(() => {
      socket.destroy();
      log('❌ [Network] TCP Connection TIMEOUT (Firewall/Network issue?)');
      resolve(false);
    }, 5000);

    socket.connect(port, host, () => {
      clearTimeout(timer);
      log('✅ [Network] TCP Connection SUCCESSFUL');
      socket.destroy();
      resolve(true);
    });

    socket.on('error', (err) => {
      clearTimeout(timer);
      log(`❌ [Network] TCP Connection FAILED: ${err.message}`);
      resolve(false);
    });
  });
}

async function main() {
  log('==================================================');
  log('🚀 Starting Database Connection Diagnosis');
  log('==================================================');

  // 1. Check Environment Variables
  const envVars = ['DATABASE_URL', 'DATABASE_HOST', 'DATABASE_PORT', 'DATABASE_USER', 'DATABASE_NAME'];
  log('\n🟡 [Env] Checking environment variables...');
  
  let missingEnv = false;
  envVars.forEach(key => {
    if (process.env[key]) {
      if (key === 'DATABASE_URL') {
        // Mask password in URL
        const maskedUrl = process.env[key].replace(/:([^:@]+)@/, ':****@');
        log(`✅ [Env] ${key} is set (${maskedUrl})`);
      } else {
        log(`✅ [Env] ${key} is set (${process.env[key]})`);
      }
    } else {
      log(`⚠️ [Env] ${key} is MISSING`);
      if (key === 'DATABASE_URL') missingEnv = true;
    }
  });

  // 2. Suggest DATABASE_URL construction if missing
  if (!process.env.DATABASE_URL && process.env.DATABASE_HOST && process.env.DATABASE_USER && process.env.DATABASE_NAME) {
    const host = process.env.DATABASE_HOST;
    const port = process.env.DATABASE_PORT || 3306;
    const user = process.env.DATABASE_USER;
    const password = process.env.DATABASE_PASSWORD || ''; // Be careful printing this
    const db = process.env.DATABASE_NAME;
    
    log(`\n💡 [Suggestion] You are missing DATABASE_URL but have individual vars.`);
    log(`   Add this to your .env file:`);
    log(`   DATABASE_URL="mysql://${user}:${password ? 'YOUR_PASSWORD' : ''}@${host}:${port}/${db}"`);
  }

  // 3. Network Test
  let host = '127.0.0.1';
  let port = 3306;

  if (process.env.DATABASE_HOST) host = process.env.DATABASE_HOST;
  if (process.env.DATABASE_PORT) port = parseInt(process.env.DATABASE_PORT);

  // Parse host/port from DATABASE_URL if available
  if (process.env.DATABASE_URL) {
    try {
      const url = new URL(process.env.DATABASE_URL);
      host = url.hostname;
      port = parseInt(url.port) || 3306;
    } catch (e) {
      log(`❌ [Env] Could not parse DATABASE_URL: ${e.message}`);
    }
  }

  const tcpSuccess = await checkTcpConnection(host, port);

  if (!tcpSuccess) {
    log('\n🛑 [Critical] Network check failed. Prisma cannot connect if TCP fails.');
    log('   Possible causes:');
    log('   1. Database server is down.');
    log('   2. Firewall blocking connection (Check inbound rules on DB server).');
    log('   3. Wrong Host/IP or Port.');
    process.exit(1);
  }

  // 4. Prisma Connection Test
  log('\n🟡 [Prisma] Testing Prisma Client connection...');
  const prisma = new PrismaClient({
    log: ['info', 'warn', 'error'],
  });

  try {
    await prisma.$connect();
    log('✅ [Prisma] $connect() succeeded.');
    
    const result = await prisma.$queryRaw`SELECT 1 as val`;
    log(`✅ [Prisma] Query execution succeeded. Result: ${JSON.stringify(result)}`);
    
    await prisma.$disconnect();
    log('\n🎉 DIAGNOSIS COMPLETE: EVERYTHING LOOKS GOOD!');
  } catch (e) {
    log(`❌ [Prisma] Connection FAILED: ${e.message}`);
    log('Stack:', e.stack);
  }
}

main().catch(console.error);
