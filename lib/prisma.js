require('dotenv').config()
const { PrismaClient } = require('@prisma/client')
const { PrismaMariaDb } = require('@prisma/adapter-mariadb')
const mariadb = require('mariadb')

console.log('🟡 [INIT] Prisma starting (adapter mode)')

if (!global.__PRISMA__) {
  console.log('🟡 [Prisma] Creating MariaDB Pool')
  console.log(`🟡 [Prisma] Config: Host=${process.env.DATABASE_HOST || '127.0.0.1'}, User=${process.env.DATABASE_USER || 'root'}, DB=${process.env.DATABASE_NAME || 'tenn_prod'}, Port=${process.env.DATABASE_PORT || 3306}`)
  
  const pool = mariadb.createPool({
    host: process.env.DATABASE_HOST || '127.0.0.1',
    user: process.env.DATABASE_USER || 'root',
    password: process.env.DATABASE_PASSWORD || '',
    database: process.env.DATABASE_NAME || 'tenn_prod',
    port: parseInt(process.env.DATABASE_PORT || 3306),
    connectionLimit: 5,
    acquireTimeout: 20000 // Increase timeout to 20s
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
