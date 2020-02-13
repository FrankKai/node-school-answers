const fs = require("fs");

const filePath = process.argv[2];
const fileStrings = fs.readFileSync(filePath).toString();
const newlinesArr = fileStrings.split("\n");
const newlinesNum = newlinesArr.length - 1;

console.log(newlinesNum);
