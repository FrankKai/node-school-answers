const readable = process.stdin;
const writable = process.stdout;
const through2 = require("through2");

function write(buffer, _, next) {
  const str = buffer.toString().toUpperCase();
  this.push(str);
  next();
}

const stream = through2(write);

readable.pipe(stream).pipe(writable);
