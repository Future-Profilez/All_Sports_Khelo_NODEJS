require('dotenv').config()

const mariadb = require('mariadb')
const { PrismaMariaDb } = require('@prisma/adapter-mariadb')
const { PrismaClient } = require('../generated/prisma')

// 🔴 DEBUG (remove later)
console.log('🔧 DB CONFIG:', {
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  port: process.env.DATABASE_PORT,
  db: process.env.DATABASE_NAME
})

// ✅ IMPORTANT: connectionLimit MUST be 1
const pool = mariadb.createPool({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  port: Number(process.env.DATABASE_PORT || 3306),
  connectionLimit: 1,
  connectTimeout: 10000
})

// 🔴 HARD TEST: raw MariaDB connection
async function testMariaDb() {
  try {
    const conn = await pool.getConnection()
    await conn.query('SELECT 1')
    conn.release()
    console.log('✅ MariaDB pool connected')
  } catch (err) {
    console.error('❌ MariaDB pool FAILED', err)
  }
}

testMariaDb()

const prisma = new PrismaClient({
  adapter: new PrismaMariaDb(pool)
})

async function testPrisma() {
  try {
    await prisma.$queryRaw`SELECT 1`
    console.log('✅ Prisma connected')
  } catch (err) {
    console.error('❌ Prisma failed to connect', err)
  }
}

testPrisma()

module.exports = prisma
