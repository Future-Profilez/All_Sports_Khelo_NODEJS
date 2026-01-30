
const fs = require('fs');
const path = require('path');

const envPath = path.join(__dirname, '..', '.env');
let content = fs.readFileSync(envPath, 'utf8');

// 1. Correct User
content = content.replace(/DATABASE_USER="tk_ask_fp"/g, 'DATABASE_USER="tk_ask_user"');

// 2. Decode Password (replace encoded chars with real ones)
// Replacing Hgtfdh*%2356hIj(%26 with Hgtfdh*#56hIj(&
// Be careful with regex special chars
const oldPass = 'DATABASE_PASSWORD="Hgtfdh*%2356hIj(%26"';
const newPass = 'DATABASE_PASSWORD="Hgtfdh*#56hIj(&"';
content = content.replace(oldPass, newPass);

// 3. Fix URL to use Localhost (Socket usage in Prisma URL is tricky, localhost is safer if TCP works)
// If TCP fails, we might need socket. But let's assume 127.0.0.1 works or user CLI proves access.
// We will set it to 127.0.0.1 which usually bypasses external firewall rules.
// Also fixing the user in the URL.

const oldUrl = 'DATABASE_URL="mysql://tk_ask_fp:Hgtfdh*%2356hIj(%26@62.72.13.122:3306/tenn_prod"';
// New URL: Use 127.0.0.1, Correct User, Encoded Password (URL must remain encoded!)
const newUrl = 'DATABASE_URL="mysql://tk_ask_user:Hgtfdh*%2356hIj(%26@127.0.0.1:3306/tenn_prod"';

if (content.includes(oldUrl)) {
    content = content.replace(oldUrl, newUrl);
} else {
    // Fallback if exact string match fails (e.g. whitespace)
    // Try to replace based on key
    content = content.replace(/^DATABASE_URL=.*$/m, newUrl);
}

// 4. Update Host
content = content.replace(/DATABASE_HOST="62.72.13.122"/, 'DATABASE_HOST="127.0.0.1"');

console.log("Updating .env with:");
console.log("- User: tk_ask_user");
console.log("- Host: 127.0.0.1");
console.log("- Password: (Raw for var, Encoded for URL)");

fs.writeFileSync(envPath, content);
console.log("✅ .env updated successfully.");
