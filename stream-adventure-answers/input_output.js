const readable = process.stdin;
const writable = process.stdout;

readable.pipe(writable);