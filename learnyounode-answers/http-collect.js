const http = require("http");
const concatStream = require("concat-stream");

const url = process.argv[2];

http
  .get(url, response => {
    response.setEncoding("utf8");
    response.pipe(
      concatStream(data => {
        console.log(data.length);
        console.log(data);
      })
    );
  })
  .on("error", console.error);
