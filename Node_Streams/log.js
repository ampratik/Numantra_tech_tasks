const fs = require('fs');

const readableStream=fs.createReadStream('log.txt');

process.stdin.pipe(readableStream)