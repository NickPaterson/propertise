import fs from 'fs';
import process from 'process';
import dotenv from 'dotenv';
dotenv.config();

const fontAwesomeToken = process.env.FONTAWESOME_NPM_TOKEN;
console.log("Creating .npmrc with FONTAWESOME_NPM_TOKEN:", fontAwesomeToken);

const npmrcContent = `@fortawesome:registry=https://npm.fontawesome.com/\n//npm.fontawesome.com/:_authToken=${fontAwesomeToken}\n`;

fs.writeFileSync('.npmrc', npmrcContent);
