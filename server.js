const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hello you all');
}

const server = http.createServer(requestListener);
server.listen(8080);
console.log('Server is successfully running');