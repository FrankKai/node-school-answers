module.exports = function average(...args) {
  const sum = args.reduce((acc, cur) => acc + cur);
  const count = args.length;
  const result = sum / count;
  return result;
};
