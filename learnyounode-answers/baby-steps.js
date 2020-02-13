const argvSlice = process.argv
  .slice(2)
  .map(e => Number(e))
  .reduce((acc, cur) => acc + cur);
console.log(argvSlice);
