
require('dotenv').config();
const mariadb = require('mariadb');

async function testConnection() {
  console.log('Testing raw MariaDB connection...');
  console.log('Host:', process.env.DATABASE_HOST || '127.0.0.1');
  console.log('User:', process.env.DATABASE_USER || 'root');
  console.log('DB:', process.env.DATABASE_NAME || 'tenn_prod');
  console.log('Port:', process.env.DATABASE_PORT || 3306);

  const pool = mariadb.createPool({
    host: process.env.DATABASE_HOST || '127.0.0.1',
    user: process.env.DATABASE_USER || 'root',
    password: process.env.DATABASE_PASSWORD || '',
    database: process.env.DATABASE_NAME || 'tenn_prod',
    port: parseInt(process.env.DATABASE_PORT || 3306),
    connectionLimit: 5,
    acquireTimeout: 20000
  });

  try {
    const conn = await pool.getConnection();
    console.log('✅ Connected successfully!');
    const rows = await conn.query('SELECT 1 as val');
    console.log('Query result:', rows);
    conn.release();
  } catch (err) {
    console.error('❌ Connection failed:', err);
  } finally {
    await pool.end();
  }
}

testConnection();
