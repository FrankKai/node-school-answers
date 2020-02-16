const port = process.argv[2];
const http = require("http");
const through2 = require("through2");

const server = http.createServer((req, res) => {
  if (req.method === "POST") {
    const stream = through2(function(buffer, _, next) {
      const str = buffer.toString().toUpperCase();
      this.push(str);
      next();
    });
    req.pipe(stream).pipe(res);
  } else {
    res.end("The HTTP server only supports for POST method.");
  }
});

server.listen(port);
