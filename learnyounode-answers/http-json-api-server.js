const http = require("http");
const url = require("url");

const port = process.argv[2];

const server = http.createServer((req, res) => {
  const urlParse = url.parse(req.url);
  const { pathname, search } = urlParse;
  const params = new URLSearchParams(search);
  const isoTime = new Date(params.get("iso"));
  let result = null;
  if (pathname === "/api/parsetime") {
    result = {
      hour: isoTime.getHours(),
      minute: isoTime.getMinutes(),
      second: isoTime.getSeconds()
    };
  }
  if (pathname === "/api/unixtime") {
    result = {
      unixtime: isoTime.getTime()
    };
  }
  // response must use JSON format
  res.end(JSON.stringify(result));
});

server.listen(port, () =>
  console.log(`HTTP Server listening on port: ${port}`)
);
