const trumpet = require("trumpet");
const through2 = require("through2");

const readable = process.stdin;
const writable = process.stdout;

const tr = trumpet();
tr.pipe(writable);

const loud = tr.select(".loud").createStream();

const through2Stream = through2(function(buffer, _, next) {
  const str = buffer.toString().toUpperCase();
  this.push(str);
  next();
});

loud.pipe(through2Stream).pipe(loud);

readable.pipe(tr);
