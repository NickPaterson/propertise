import { writeFileSync } from 'fs';
import { env } from 'process'; // Import the 'process' module
const fontAwesomeToken = env.FONTAWESOME_NPM_TOKEN;

const npmrcContent = `@fortawesome:registry=https://npm.fontawesome.com/\n//npm.fontawesome.com/:_authToken=${fontAwesomeToken}\n`;

writeFileSync('.npmrc', npmrcContent);
