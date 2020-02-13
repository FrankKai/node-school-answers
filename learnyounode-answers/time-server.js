const net = require("net");
const moment = require("moment");

const port = process.argv[2];

const server = net.createServer(function(socket) {
  const date = moment().format("YYYY-MM-DD HH:mm");
  const result = `${date}\n`;
  socket.end(result);
});

server.listen(port);
