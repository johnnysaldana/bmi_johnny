const http = require("http");
const fs = require("fs");
const port = process.env.PORT || 7000;
const file = fs.readFileSync("./index.html", "utf8");

const server = http.createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "text/html" });
  response.write(file);
  response.end();
});

server.listen(port);
console.log(`Listening! (port ${port})`);