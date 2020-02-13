const fs = require("fs");

const filePath = process.argv[2];

fs.readFile(filePath, (err, buffer) => {
  if (err) throw err;
  const fileStrings = buffer.toString();
  const newlinesArr = fileStrings.split("\n");
  const newlinesNum = newlinesArr.length - 1;
  console.log(newlinesNum);
});
