const http = require("http");

const director = require("./director.js");

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
      director.readFile("./views/home.html", response);
      myEmitter.emit("event", "EVENT", "User entered the HOME page");
      break;
    case "/about":
      director.readFile("./views/about.html", response);
      myEmitter.emit("event", "EVENT", "User entered the ABOUT page");
      break;
    case "/contact":
      director.readFile("./views/contact.html", response);
      myEmitter.emit("event", "EVENT", "User entered the CONTACT page");
      break;
    case "/products":
      director.readFile("./views/products.html", response);
      myEmitter.emit("event", "EVENT", "User entered the PRODUCTS page");
      break;
    case "/subscribe":
      director.readFile("./views/subscribe.html", response);
      myEmitter.emit("event", "EVENT", "User entered the SUBSCRIBE page");
      break;
    case "/favicon.ico":
      break;
    default:
      director.redirect("/", response);
      myEmitter.emit("error", "ERROR", "User entered a unknown path");
      break;
  }
});

server.listen(port, () => {
  console.log("Server running!");
});
