require('dotenv').config()
const { PrismaClient } = require('@prisma/client')
const { PrismaMariaDb } = require('@prisma/adapter-mariadb')
const mariadb = require('mariadb')

console.log('🟡 [INIT] Prisma starting (adapter mode)')

if (!global.__PRISMA__) {
  console.log('🟡 [Prisma] Creating MariaDB Pool')
  const pool = mariadb.createPool({
    host: process.env.DATABASE_HOST || '127.0.0.1',
    user: process.env.DATABASE_USER || 'root',
    password: process.env.DATABASE_PASSWORD || '',
    database: process.env.DATABASE_NAME || 'tenn_prod',
    connectionLimit: 5
  })

  console.log('🟡 [Prisma] Creating PrismaClient (adapter)')
  
  const adapter = new PrismaMariaDb({
    host: process.env.DATABASE_HOST || '127.0.0.1',
    user: process.env.DATABASE_USER || 'root',
    password: process.env.DATABASE_PASSWORD || '',
    database: process.env.DATABASE_NAME || 'tenn_prod',
    connectionLimit: 5
  })
  
  global.__PRISMA__ = new PrismaClient({
    adapter,
    log: ['error', 'warn']
  })
}

const prisma = global.__PRISMA__

setTimeout(async () => {
  try {
    console.log('🟡 [Prisma] Testing connectivity...')
    await prisma.$queryRaw`SELECT 1`
    console.log('✅ [Prisma] Connected via Adapter')
  } catch (e) {
    console.error('❌ [Prisma] Connection failed:', e.message)
    console.error('Stack:', e.stack)
  }
}, 1000)

module.exports = prisma
