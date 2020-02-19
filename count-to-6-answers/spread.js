const nums = process.argv.slice(2);

const min = Math.min(...nums);

const result = `The minimum of [${nums}] is ${min}`

console.log(result);