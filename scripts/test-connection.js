const prisma = require('../lib/prisma');

async function main() {
  console.log('Waiting for connection...');
  // The lib/prisma.js has a setTimeout of 1500ms for the check.
  // We'll wait a bit longer to see the output.
  setTimeout(() => {
    console.log('Test script finished waiting.');
  }, 3000);
}

main();
