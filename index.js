const http = require("http");
const fs = require("fs");
const path = require("path");
global.DEBUG = true;

const server = http.createServer((request, response) => {
  if (DEBUG) console.log("Requested URL: " + request.url);
  response.statusCode = 200;
  response.setHeader("Content-Type", "text/plain");
  switch (request.url) {
    case "/":
      response.end("You are on home page.");
      break;
    case "/about":
      response.end("You are on about page.");
      break;
    case "/contact":
      response.end("You are on contact page.");
      break;
    case "/products":
      response.end("You are on products page.");
      break;
    case "/subscribe":
      response.end("You are on subscribe page.");
      break;
    default:
      response.end("You are on no page.");
      break;
  }
});

server.listen(3000, () => {
  console.log("Server running!");
});
