const through2 = require("through2");
const combine = require("stream-combiner");
const split = require("split");
const zlib = require("zlib");

module.exports = function() {
  const input = zlib.createGzip();
  let formatLine;

  function write(buffer, _, next) {
    if (buffer.length === 0) return next();
    const row = JSON.parse(buffer);

    if (row.type === "genre") {
      if (formatLine) {
        this.push(`${JSON.stringify(formatLine)}\n`);
      }
      formatLine = { name: row.name, books: [] };
    }
    if (row.type === "book") {
      formatLine.books.push(row.name);
    }
    next();
  }

  function end(next) {
    if (formatLine) {
      this.push(`${JSON.stringify(formatLine)}\n`);
    }
    next();
  }
  const output = through2(write, end);
  return combine(split(), output, input);
};
