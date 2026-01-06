const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello from OpenShift!');
});

server.listen(3000);
