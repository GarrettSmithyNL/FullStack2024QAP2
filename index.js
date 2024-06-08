const http = require("http");
const fs = require("fs");
const path = require("path");
const { getSystemErrorMap } = require("util");
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
      fs.readFile("./views/home.html", "utf8", (error, data) => {
        if (error) {
          if (DEBUG) console.log(error);
          response.statusCode = 500;
          response.end("Error getting file!");
        } else {
          response.setHeader("Content-Type", "text/html");
          response.write(data);
          response.end();
        }
      });
      break;
    case "/about":
      fs.readFile("./views/about.html", "utf8", (error, data) => {
        if (error) {
          if (DEBUG) console.log(error);
          response.statusCode = 500;
          response.end("Error getting file!");
        } else {
          response.setHeader("Content-Type", "text/html");
          response.write(data);
          response.end();
        }
      });
      break;
    case "/contact":
      fs.readFile("./views/contact.html", "utf8", (error, data) => {
        if (error) {
          if (DEBUG) console.log(error);
          response.statusCode = 500;
          response.end("Error getting file!");
        } else {
          response.setHeader("Content-Type", "text/html");
          response.write(data);
          response.end();
        }
      });
      break;
    case "/products":
      fs.readFile("./views/products.html", "utf8", (error, data) => {
        if (error) {
          if (DEBUG) console.log(error);
          response.statusCode = 500;
          response.end("Error getting file!");
        } else {
          response.setHeader("Content-Type", "text/html");
          response.write(data);
          response.end();
        }
      });
      break;
    case "/subscribe":
      fs.readFile("./views/subscribe.html", "utf8", (error, data) => {
        if (error) {
          if (DEBUG) console.log(error);
          response.statusCode = 500;
          response.end("Error getting file!");
        } else {
          response.setHeader("Content-Type", "text/html");
          response.write(data);
          response.end();
        }
      });
      break;
    default:
      response.end("You are on no page.");
      break;
  }
});

server.listen(3000, () => {
  console.log("Server running!");
});
