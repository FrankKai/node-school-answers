const fs = require("fs");
const path = require("path");

const filteredLS = (dirPath, filterExt, callback) => {
  fs.readdir(dirPath, (err, list) => {
    if (err) return callback(err);
    if (!filterExt) return callback(new Error("Invalid extension"));
    const filteredList = list.filter(
      file => `.${filterExt}` === path.extname(file)
    );
    callback(null, filteredList);
  });
};

module.exports = filteredLS;
