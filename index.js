// Importing the required modules
const http = require("http");
const director = require("./director.js");
const myEmitter = require("./emitter.js");

// Set the DEBUG variable to true to log the requested URL
global.DEBUG = false;

// Set the port number
const port = 3000;

// Create a server that listens on the specified port
const server = http.createServer((request, response) => {
  // Log the requested URL if the DEBUG variable is set to true
  if (DEBUG) {
    if (request.url == "/favicon.ico") {
    } else {
      console.log("Requested URL: " + request.url);
    }
  }
  // Set the status code to 200
  response.statusCode = 200;
  // Set the content type to text/html
  switch (request.url) {
    // Check the requested URL and send the corresponding file
    case "/":
    case "/home":
      // Send the home page
      director.readFile("./views/home.html", response);
      // Emit an event when the user enters the home page
      myEmitter.emit("event", "EVENT", "User entered the HOME page");
      break;
    case "/about":
      // Send the about page
      director.readFile("./views/about.html", response);
      // Emit an event when the user enters the about page
      myEmitter.emit("event", "EVENT", "User entered the ABOUT page");
      break;
    case "/contact":
      // Send the contact page
      director.readFile("./views/contact.html", response);
      // Emit an event when the user enters the contact page
      myEmitter.emit("event", "EVENT", "User entered the CONTACT page");
      break;
    case "/products":
      // Send the products page
      director.readFile("./views/products.html", response);
      // Emit an event when the user enters the products page
      myEmitter.emit("event", "EVENT", "User entered the PRODUCTS page");
      break;
    case "/subscribe":
      // Send the subscribe page
      director.readFile("./views/subscribe.html", response);
      // Emit an event when the user enters the subscribe page
      myEmitter.emit("event", "EVENT", "User entered the SUBSCRIBE page");
      break;
    case "/favicon.ico":
      // If the requested URL is for the favicon, do nothing
      break;
    default:
      // Redirect the user to the home page if the requested URL is unknown
      director.redirect("/", response);
      // Emit an error event when the user enters an unknown path
      myEmitter.emit("error", "ERROR", "User entered a unknown path");
      break;
  }
});

// Start the server
server.listen(port, () => {
  console.log("Server running!");
});
