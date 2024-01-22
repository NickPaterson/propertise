import fs from 'fs';
import process from 'process';

const fontAwesomeToken = process.env.FONTAWESOME_NPM_TOKEN;
console.log("Creating .npmrc with FONTAWESOME_NPM_TOKEN:", process.env.FONTAWESOME_NPM_TOKEN);

const npmrcContent = `@fortawesome:registry=https://npm.fontawesome.com/\n//npm.fontawesome.com/:_authToken=${fontAwesomeToken}\n`;

fs.writeFileSync('.npmrc', npmrcContent);
