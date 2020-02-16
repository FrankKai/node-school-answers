const concat = require("concat-stream");
const readable = process.stdin;

// buf is the data of all stream buffer
const concatStream = concat(buf => {
  const str = buf.toString();
  // transform str to character arr
  // If separator is an empty string (""), str is converted to an array of each of its UTF-16 "characters".
  const strCharArr = str.split("");
  const strCharArrReverse = strCharArr.reverse();
  // transform character arr to str
  // If separator is an empty string, all elements are joined without any characters in between them.
  const strReverse = strCharArrReverse.join("");
  console.log(strReverse);
});

readable.pipe(concatStream);
