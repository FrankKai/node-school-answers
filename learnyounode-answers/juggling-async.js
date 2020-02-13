const http = require("http");
const concatStream = require("concat-stream");

const urls = process.argv.slice(2);

function urlParse(url) {
  return new Promise(resolve => {
    http
      .get(url, response => {
        response.setEncoding("utf-8");
        response.pipe(
          concatStream(data => {
            resolve(data);
          })
        );
      })
      .on("error", console.error);
  });
}

const promiseArr = [];
urls.forEach(url => {
  promiseArr.push(urlParse(url));
});

Promise.all(promiseArr).then(results => {
  results.forEach(result => console.log(result));
});
