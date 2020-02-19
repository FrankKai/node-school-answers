const inputs = process.argv.slice(2);

const mapInputs = inputs.map(e => e.charAt(0));

const reduceInputs = mapInputs.reduce((acc, cur) => acc + cur);

const stdoutResult = `[${inputs}] becomes "${reduceInputs}"`;

console.log(stdoutResult);
