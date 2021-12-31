import fs from 'fs';

const json = Object.entries(JSON.parse(fs.readFileSync('./package.json', 'utf-8')).dependencies);

console.log(json.map(d => `npm i ${d[0]}`).join(' && '))