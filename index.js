const http = require("http");
const os = require("os");
const path = require("path");

const reader = require("./file");

global.DEBUG = true;

const server = http.createServer((request, response) => {
  if (DEBUG) {
    if (request.url == "/favicon.ico") {
    } else {
      console.log("Requested URL: " + request.url);
    }
  }
  response.statusCode = 200;
  switch (request.url) {
    case "/":
    case "/home":
      reader.readFile("./views/home.html", response);
      break;
    case "/about":
      reader.readFile("./views/about.html", response);
      break;
    case "/contact":
      reader.readFile("./views/contact.html", response);
      break;
    case "/products":
      reader.readFile("./views/products.html", response);

      break;
    case "/subscribe":
      reader.readFile("./views/subscribe.html", response);
      break;
    default:
      response.end("You are on no page.");
      break;
  }
});

server.listen(3000, () => {
  console.log("Server running!");
});
