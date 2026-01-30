
const https = require('https');

async function getPublicIP() {
    console.log("Checking Outgoing IP Address...");
    
    const services = [
        'https://api.ipify.org?format=json',
        'https://ifconfig.me/all.json',
        'https://ipinfo.io/json'
    ];

    for (const url of services) {
        try {
            const ip = await new Promise((resolve, reject) => {
                https.get(url, (res) => {
                    let data = '';
                    res.on('data', chunk => data += chunk);
                    res.on('end', () => {
                        try {
                            const json = JSON.parse(data);
                            resolve(json.ip || json.ip_addr);
                        } catch (e) {
                            // Some services return plain text
                            resolve(data.trim());
                        }
                    });
                }).on('error', reject);
            });
            
            if (ip) {
                console.log(`\n✅ Your server's outgoing IP is: ${ip}`);
                console.log(`👉 Please ensure this IP (${ip}) is whitelisted on your Database Server (62.72.13.122).`);
                return;
            }
        } catch (e) {
            continue;
        }
    }
    console.log("❌ Could not detect IP. Please check your network config.");
}

getPublicIP();
