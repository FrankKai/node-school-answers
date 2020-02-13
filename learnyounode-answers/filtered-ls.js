const fs = require("fs");
const path = require("path");

const dirPath = process.argv[2];
const filterExt = process.argv[3];

fs.readdir(dirPath, (err, list) => {
  if (err) throw err;
  list.forEach(file => {
    if (filterExt) {
      const validate = `.${filterExt}` === path.extname(file);
      if (validate) {
        console.log(file);
      }
    } else {
      console.log(file);
    }
  });
});
