const http = require("http");
const fs = require("fs");

const file = fs.readFileSync("./index.html", "utf8");

const server = http.createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "text/html" });
  response.write(file);
  response.end();
});

server.listen(7000);
console.log("Listening! (port 7000)");