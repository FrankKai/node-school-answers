const mymodule = require("./mymodule.js");

const dirPath = process.argv[2];
const filterExt = process.argv[3];

mymodule(dirPath, filterExt, (err, list) => {
  if (err) throw err;
  list.forEach(file => {
    console.log(file);
  });
});
