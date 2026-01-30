
const fs = require('fs');
const path = require('path');

const envPath = path.join(__dirname, '..', '.env');
let content = fs.readFileSync(envPath, 'utf8');

console.log("Applying Connection Timeout Fix to .env...");

// We need to append ?connect_timeout=30&pool_timeout=30 to the DATABASE_URL
// Regex to find the DATABASE_URL line
const urlRegex = /(DATABASE_URL="mysql:\/\/.*?)(\"?)$/m;

if (urlRegex.test(content)) {
    const match = content.match(urlRegex);
    const currentUrl = match[1];
    
    // Check if parameters already exist
    let newUrl = currentUrl;
    if (currentUrl.includes('?')) {
        // Append with &
        if (!currentUrl.includes('connect_timeout')) {
            newUrl += '&connect_timeout=30';
        }
        if (!currentUrl.includes('pool_timeout')) {
            newUrl += '&pool_timeout=30';
        }
        if (!currentUrl.includes('socket_timeout')) {
             newUrl += '&socket_timeout=30';
        }
    } else {
        // Append with ?
        newUrl += '?connect_timeout=30&pool_timeout=30&socket_timeout=30';
    }

    // Ensure closing quote if it was there
    newUrl += '"'; 
    
    content = content.replace(urlRegex, newUrl);
    fs.writeFileSync(envPath, content);
    console.log("✅ Updated DATABASE_URL with timeout parameters (30s).");
    console.log("   New URL ends with: .../tenn_prod?connect_timeout=30&pool_timeout=30&socket_timeout=30");
} else {
    console.log("❌ Could not find DATABASE_URL in .env to update.");
}
