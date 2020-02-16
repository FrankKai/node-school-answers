const duplexer2 = require("duplexer2");
const throughObj = require("through2").obj;

module.exports = function(counter) {
  const readable = counter;
  const counts = {};
  const write = (row, _, next) => {
    if (counts[row.country]) {
      counts[row.country]++;
    } else {
      counts[row.country] = 1;
    }
    next();
  };

  const end = done => {
    readable.setCounts(counts);
    done();
  };
  const writable = throughObj(write, end);
  return duplexer2({ objectMode: true }, writable, readable);
};
