const split = require("split");
const through2 = require("through2");

const readable = process.stdin;
const writable = process.stdout;

let lineCount = 0;
function write(buffer, _, next) {
  const isOdd = lineCount % 2 === 1;
  const isEven = lineCount % 2 === 0;
  let str = buffer.toString();
  if (isOdd) {
    this.push(`${str.toUpperCase()}\n`);
  }
  if (isEven) {
    this.push(`${str.toLowerCase()}\n`);
  }
  lineCount++;
  next();
}

const stream = through2(write);

readable
  .pipe(split())
  .pipe(stream)
  .pipe(writable);
