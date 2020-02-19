const userArray = process.argv.slice(2);

const [, username, email] = userArray;

const result = { username, email };

console.log(result);