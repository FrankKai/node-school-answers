const http = require("http");
const fs = require("fs");

const port = process.argv[2];
const file = process.argv[3];

const server = http.createServer((req, res) => {
  // connect file system to http server
  fs.createReadStream(file).pipe(res);
});

server.listen(port, () =>
  console.log(`HTTP Server listening on port: ${port}`)
);
