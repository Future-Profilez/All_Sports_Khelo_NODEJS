const prisma = require('../lib/prisma');

async function main() {
  console.log('Waiting for connection...');
  try {
    await prisma.$connect();
    console.log('✅ [Prisma] Connected successfully (Explicit Connect)');
    const result = await prisma.$queryRaw`SELECT 1 as val`;
    const academies = await prisma.academies.findMany({});
    console.log('✅ [Prisma] Academies:', academies);
    console.log('✅ [Prisma] Query Result:', result);
    await prisma.$disconnect(); 
  } catch (e) {
    console.error('❌ [Prisma] Connection failed:', e);
  }
}

main();
