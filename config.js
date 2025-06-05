const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
ALIVE_IMG : process.env.ALIVE_IMG || "https://files.catbox.moe/v40suc",
ALIVE_SMG : process.env.ALIVE_SMG ||  "HY , IM MALIK BOT",
AUTO_READ_STATUS : process.env.AUTO_READ_STATUS || "true",
    
};
