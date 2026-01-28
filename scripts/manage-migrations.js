const fs = require('fs');
const path = require('path');
const { PrismaClient } = require('@prisma/client');
const { execSync } = require('child_process');

const prisma = new PrismaClient();
const SQL_DIR = path.join(__dirname, '../prisma/sql');

async function main() {
  console.log('Checking for custom migrations...');

  // 1. Create tracking table if not exists
  // We use a raw query to create the table. 
  // Note: This table is separate from _prisma_migrations
  try {
    await prisma.$executeRawUnsafe(`
      CREATE TABLE IF NOT EXISTS _custom_migrations (
        id INT AUTO_INCREMENT PRIMARY KEY,
        migration_name VARCHAR(255) NOT NULL UNIQUE,
        applied_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `);
  } catch (error) {
    console.error('Error creating tracking table:', error);
    process.exit(1);
  }

  // 2. Get applied migrations
  let appliedNames = new Set();
  try {
    const applied = await prisma.$queryRawUnsafe(`SELECT migration_name FROM _custom_migrations`);
    // applied is an array of objects
    applied.forEach(m => appliedNames.add(m.migration_name));
  } catch (error) {
    console.error('Error fetching applied migrations:', error);
    process.exit(1);
  }

  // 3. Get files
  if (!fs.existsSync(SQL_DIR)) {
    console.log(`Directory ${SQL_DIR} not found.`);
    return;
  }
  
  const files = fs.readdirSync(SQL_DIR).filter(f => f.endsWith('.sql')).sort();

  if (files.length === 0) {
    console.log('No SQL files found in prisma/sql.');
    return;
  }

  // 4. Run pending
  const markOnly = process.argv.includes('--mark-only');
  let pendingCount = 0;
  for (const file of files) {
    if (!appliedNames.has(file)) {
      pendingCount++;
      if (markOnly) {
         console.log(`Marking migration as applied (skipping execution): ${file}...`);
      } else {
         console.log(`Applying migration: ${file}...`);
      }
      
      const filePath = path.join(SQL_DIR, file);
      
      try {
        if (!markOnly) {
          // Execute the SQL file using Prisma CLI
          // This ensures compatibility with how Prisma connects
          // We assume npx is available in the environment
          execSync(`npx prisma db execute --file "${filePath}" --config prisma.config.ts`, { stdio: 'inherit' });
        }
        
        // Record success
        await prisma.$executeRawUnsafe(`INSERT INTO _custom_migrations (migration_name) VALUES (?)`, file);
        console.log(`Successfully recorded: ${file}`);
      } catch (e) {
        console.error(`Failed to process ${file}. Stopping execution.`);
        // console.error(e.message); // execSync usually prints to stderr
        process.exit(1);
      }
    }
  }

  if (pendingCount === 0) {
    console.log('No pending migrations.');
  } else {
    console.log(`Applied ${pendingCount} migrations successfully.`);
  }
}

main()
  .catch(e => {
    console.error('Unexpected error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
