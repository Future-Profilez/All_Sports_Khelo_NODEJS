const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('\n🔐  DATABASE_URL Generator');
console.log('============================');

rl.question('Enter Database User: ', (user) => {
  rl.question('Enter Database Password: ', (password) => {
    rl.question('Enter Database Host (e.g. 62.72.13.122): ', (host) => {
      rl.question('Enter Database Port (default 3306): ', (portInput) => {
        rl.question('Enter Database Name (e.g. tenn_prod): ', (dbName) => {
          
          const port = portInput || '3306';
          
          // CRITICAL STEP: URL Encode the password
          const encodedPassword = encodeURIComponent(password);
          const encodedUser = encodeURIComponent(user);
          
          const url = `mysql://${encodedUser}:${encodedPassword}@${host}:${port}/${dbName}`;
          
          console.log('\n✅  Here is your SAFE connection string (copy this to .env):');
          console.log('-----------------------------------------------------------');
          console.log(`DATABASE_URL="${url}"`);
          console.log('-----------------------------------------------------------\n');
          
          rl.close();
        });
      });
    });
  });
});
