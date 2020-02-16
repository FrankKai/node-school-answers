const request = require("request");
const readable = process.stdin;
const writable = process.stdout;

const r = request.post("http://localhost:8099");

readable.pipe(r).pipe(writable);