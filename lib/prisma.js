require('dotenv').config()
const { PrismaClient } = require('@prisma/client')

if (!global.__PRISMA__) {
  console.log('🟡 [Prisma] Creating PrismaClient (mysql provider)')
  global.__PRISMA__ = new PrismaClient({
    log: ['error', 'warn']
  })
}
 
const prisma = global.__PRISMA__

module.exports = prisma
