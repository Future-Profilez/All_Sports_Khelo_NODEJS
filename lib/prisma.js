// require("dotenv").config();
// DATABASE_URL="mysql://root:Futureprofilez123@localhost:3306/mydb"
//add-start
// DATABASE_USER="username"
// DATABASE_PASSWORD="Futureprofilez123"
// DATABASE_NAME="mydb"
// DATABASE_HOST="localhost"
// DATABASE_PORT=3306
const { PrismaMariaDb } = require('@prisma/adapter-mariadb');
const { PrismaClient } = require('../generated/prisma/client');

const adapter = new PrismaMariaDb({
  host: "localhost",
  user: "root",
  password: "Futureprofilez123",
  database: "allsportskhelo",
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