const fs = require('fs');
const process = require('process'); // Import the 'process' module
const fontAwesomeToken = process.env.FONTAWESOME_NPM_TOKEN;

const npmrcContent = `@fortawesome:registry=https://npm.fontawesome.com/\n//npm.fontawesome.com/:_authToken=${fontAwesomeToken}\n`;

fs.writeFileSync('.npmrc', npmrcContent);
