const http = require("http");

const reader = require("./file");

const myEmitter = require("./emitter.js");

global.DEBUG = false;

const port = 3000;

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
      myEmitter.emit("event", "EVENT", "User entered the HOME page");
      break;
    case "/about":
      reader.readFile("./views/about.html", response);
      myEmitter.emit("event", "EVENT", "User entered the ABOUT page");
      break;
    case "/contact":
      reader.readFile("./views/contact.html", response);
      myEmitter.emit("event", "EVENT", "User entered the CONTACT page");
      break;
    case "/products":
      reader.readFile("./views/products.html", response);
      myEmitter.emit("event", "EVENT", "User entered the PRODUCTS page");
      break;
    case "/subscribe":
      reader.readFile("./views/subscribe.html", response);
      myEmitter.emit("event", "EVENT", "User entered the SUBSCRIBE page");
      break;
    case "/favicon.ico":
      break;
    default:
      myEmitter.emit("error", "ERROR", "User entered a unknown path");
      response.statusCode = 302;
      response.setHeader("location", "/");
      response.end();
      break;
  }
});

server.listen(port, () => {
  console.log("Server running!");
});
