const crypto = require("crypto");
const passphrase = process.argv[2];
const readable = process.stdin;
const writable = process.stdout;

const stream = crypto.createDecipher("aes256", passphrase);

readable.pipe(stream).pipe(writable);
