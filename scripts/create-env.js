const fs = require('fs');


//llamado a las .env con el modulo fs
fs.writeFileSync('./.env', `API=${process.env.API}\n`);
