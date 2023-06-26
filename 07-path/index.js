const path = require('path');

const filePath = '/Users/bogdan/Desktop/node/index.js';
const textFilePath = '/Users/bogdan/Desktop/node/file.txt';
const relativePath = './node/movie.mov';
const directoryPath = './node/subfolder';

console.log(path.isAbsolute(filePath));
console.log(path.isAbsolute(relativePath));

console.log(path.basename(filePath));
console.log(path.basename(directoryPath));

console.log(path.dirname(filePath));
console.log(path.dirname(directoryPath));

console.log(path.resolve(directoryPath));
console.log(path.resolve(relativePath));

console.log(path.extname(textFilePath));
console.log(path.extname(directoryPath));

console.log(path.parse(filePath));

const pardesPath = path.parse(filePath);
console.log(path.join(pardesPath.dir, `renamed-${pardesPath.name}.mjs`));
