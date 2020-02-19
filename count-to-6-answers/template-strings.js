const name = process.argv[2];

const templateStr = `Hello, ${name}!
Your name lowercased is "${name.toLowerCase()}".`;

console.log(templateStr);
