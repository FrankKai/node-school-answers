const readable = process.stdin;

const zlib = require("zlib");
const crypto = require("crypto");

const tar = require("tar");
const through2 = require("through2");

const cipherName = process.argv[2];
const cipherPassphrase = process.argv[3];

const decipherStream = crypto.createDecipher(cipherName, cipherPassphrase);
const gunzip = zlib.createGunzip();

const parser = new tar.Parse();
parser.on("entry", e => {
  if (e.type !== "File") return e.resume();
  const h = crypto.createHash("md5", { encoding: "hex" });
  e.pipe(h).pipe(
    through2((hash, _, next) => {
      console.log(`${hash} ${e.path}`);
      next();
    })
  );
});

readable
  .pipe(decipherStream)
  .pipe(gunzip)
  .pipe(parser);
