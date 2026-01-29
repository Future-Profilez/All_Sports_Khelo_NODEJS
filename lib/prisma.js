require('dotenv').config()

const mariadb = require('mariadb')
const { PrismaMariaDb } = require('@prisma/adapter-mariadb')
const { PrismaClient } = require('../generated/prisma')

// ✅ Create MariaDB connection pool
const pool = mariadb.createPool({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  port: Number(process.env.DATABASE_PORT || 3306),
  connectionLimit: 1 // IMPORTANT for Prisma + MariaDB
})

// ✅ Pass pool to adapter
const adapter = new PrismaMariaDb(pool)

// ✅ Create Prisma client
const prisma = new PrismaClient({
  adapter
})

// 🔍 Optional startup test (can remove later)
async function testConnection() {
  try {
    await prisma.$queryRaw`SELECT 1`
    console.log('✅ Prisma connected to MySQL/MariaDB successfully!')
  } catch (error) {
    console.error('❌ Prisma failed to connect:', error)
  }
}

testConnection()

module.exports = prisma
