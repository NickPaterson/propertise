import fs from 'fs';
import process from 'process';

const fontAwesomeToken = process.env.FONTAWESOME_NPM_TOKEN;
if (!fontAwesomeToken) {
  throw new Error('FONTAWESOME_NPM_TOKEN environment variable is not set');
}
const npmrcContent = `@fortawesome:registry=https://npm.fontawesome.com/\n//npm.fontawesome.com/:_authToken=${fontAwesomeToken}\n`;

fs.writeFileSync('.npmrc', npmrcContent);
