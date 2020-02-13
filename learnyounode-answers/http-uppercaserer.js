const http = require("http");
const streamMap = require("through2-map");

const port = process.argv[2];

const server = http.createServer((req, res) => {
  if (req.method === "POST") {
    const through2Obj = streamMap(chunk => {
      return chunk.toString().toUpperCase();
    });
    req.pipe(through2Obj).pipe(res);
  } else {
    console.warn("Invalid HTTP method");
  }
});

server.listen(port, () =>
  console.log(`HTTP Server listening on port: ${port}`)
);
