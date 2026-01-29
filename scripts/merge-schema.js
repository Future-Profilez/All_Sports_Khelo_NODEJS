const fs = require('fs');
const path = require('path');

const schemaDir = path.join(__dirname, '../prisma/schema');
const outputFile = path.join(__dirname, '../prisma/schema.prisma');

// List of files to process in order (base first)
const baseFile = path.join(schemaDir, 'base.prisma');

function getAllPrismaFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      getAllPrismaFiles(filePath, fileList);
    } else {
      if (file.endsWith('.prisma') && filePath !== baseFile) {
        fileList.push(filePath);
      }
    }
  });
  return fileList;
}

try {
  console.log('Merging schema files...');
  let content = '';

  // 1. Add base.prisma
  if (fs.existsSync(baseFile)) {
    console.log('Adding base.prisma');
    content += fs.readFileSync(baseFile, 'utf8') + '\n\n';
  } else {
    console.error('Error: prisma/schema/base.prisma not found!');
    process.exit(1);
  }

  // 2. Add other files
  const otherFiles = getAllPrismaFiles(schemaDir);
  otherFiles.forEach(file => {
    console.log(`Adding ${path.relative(schemaDir, file)}`);
    content += fs.readFileSync(file, 'utf8') + '\n\n';
  });

  // 3. Write to schema.prisma
  fs.writeFileSync(outputFile, content);
  console.log(`Successfully created ${outputFile}`);
} catch (err) {
  console.error('Error merging schemas:', err);
  process.exit(1);
}
