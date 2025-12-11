require("dotenv").config();
const { PrismaMariaDb } = require('@prisma/adapter-mariadb');
const { PrismaClient } = require('../generated/prisma/client');

const adapter = new PrismaMariaDb({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,  
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  connectionLimit: 5
});
const prisma = new PrismaClient({ adapter });

async function testConnection() {
  try {
    await prisma.$queryRaw`SELECT 1`;
    console.log("✅ Prisma connected to MySQL/MariaDB successfully!");
  } catch (error) {
    console.error("❌ Prisma failed to connect:", error);
  }
}

testConnection();

module.exports = prisma;