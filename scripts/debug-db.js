const mariadb = require('mariadb');
require('dotenv').config();

async function test() {
  console.log('Testing raw mariadb connection...');
  console.log('Host:', process.env.DATABASE_HOST);
  console.log('User:', process.env.DATABASE_USER);
  console.log('Port:', process.env.DATABASE_PORT);
  console.log('DB:', process.env.DATABASE_NAME);

  const pool = mariadb.createPool({
    host: process.env.DATABASE_HOST || 'localhost', 
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    port: Number(process.env.DATABASE_PORT) || 3306,
    connectionLimit: 5
  });

  try {
    const conn = await pool.getConnection();
    console.log('✅ Connected successfully!');
    const rows = await conn.query('SELECT 1 as val');
    console.log('Query result:', rows);
    conn.release(); // release to pool
  } catch (err) {
    console.error('❌ Connection failed:', err);
  } finally {
    await pool.end();
  }
}

test();
