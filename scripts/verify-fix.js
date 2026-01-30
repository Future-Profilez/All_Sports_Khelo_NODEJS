
const mariadb = require('mariadb');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

async function testConnection(config, description) {
  console.log(`\nTesting: ${description}`);
  console.log(`  Host: ${config.host}`);
  console.log(`  User: ${config.user}`);
  console.log(`  Port: ${config.port}`);
  // Do not log password

  const pool = mariadb.createPool({
    ...config,
    connectionLimit: 1,
    acquireTimeout: 5000 // 5s timeout
  });

  try {
    const conn = await pool.getConnection();
    console.log('  ✅ Connected successfully!');
    const rows = await conn.query('SELECT 1 as val');
    console.log('  ✅ Query result:', rows);
    conn.release();
    return true;
  } catch (err) {
    console.error(`  ❌ Connection failed: ${err.message}`);
    if (err.code) console.error(`  Code: ${err.code}`);
    return false;
  } finally {
    await pool.end();
  }
}

async function main() {
  console.log('==========================================');
  console.log('🔍 Database Connection Verification Tool');
  console.log('==========================================');

  const envUser = process.env.DATABASE_USER;
  const envPass = process.env.DATABASE_PASSWORD;
  const envHost = process.env.DATABASE_HOST;
  const envPort = parseInt(process.env.DATABASE_PORT || 3306);
  const envDb = process.env.DATABASE_NAME;

  // Check 1: Analyze Password Encoding
  let rawPass = envPass;
  let decodedPass = envPass;
  try {
    decodedPass = decodeURIComponent(envPass);
  } catch (e) {}

  const isEncoded = rawPass !== decodedPass;
  if (isEncoded) {
    console.log(`\n⚠️  WARNING: DATABASE_PASSWORD appears to be URL-encoded.`);
    console.log(`   Original: ${rawPass}`);
    console.log(`   Decoded:  ${decodedPass}`);
    console.log(`   The 'mariadb' driver and Prisma usually expect the RAW password in the password field,`);
    console.log(`   but DATABASE_URL requires it to be encoded.`);
  }

  // Check 2: Try connection with Env settings
  console.log('\n--- Attempt 1: Using current .env settings ---');
  await testConnection({
    host: envHost,
    user: envUser,
    password: envPass,
    database: envDb,
    port: envPort
  }, 'Current .env configuration');

  // Check 3: If encoded, try with decoded password
  if (isEncoded) {
    console.log('\n--- Attempt 2: Using DECODED password ---');
    await testConnection({
      host: envHost,
      user: envUser,
      password: decodedPass,
      database: envDb,
      port: envPort
    }, 'Decoded Password');
  }

  // Check 4: Try with localhost if host is IP
  if (envHost !== '127.0.0.1' && envHost !== 'localhost') {
    console.log('\n--- Attempt 3: Using localhost instead of public IP ---');
    await testConnection({
      host: '127.0.0.1',
      user: envUser,
      password: isEncoded ? decodedPass : envPass,
      database: envDb,
      port: envPort
    }, 'Localhost override');
  }

  // Check 5: Suggest User check
  console.log('\n--- Analysis ---');
  console.log(`Your .env USER is: '${envUser}'`);
  console.log(`You mentioned using: 'tk_ask_user' in CLI.`);
  if (envUser !== 'tk_ask_user') {
    console.log(`\n🚩 MISMATCH DETECTED: .env has '${envUser}' but CLI used 'tk_ask_user'.`);
    console.log(`   Try changing DATABASE_USER to 'tk_ask_user' in .env`);
    console.log(`   And update DATABASE_URL accordingly.`);
  }

  console.log('\n==========================================');
}

main().catch(console.error);
