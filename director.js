const fs = require("fs");
const myEmitter = require("./emitter.js");

const readFile = (path, response) => {
  fs.readFile(path, "utf8", (error, data) => {
    if (error) {
      response.statusCode = 500;
      myEmitter.emit("error", "ERROR", `"${path}" was not found`);
    } else {
      response.setHeader("Content-Type", "text/html");
      response.write(data);
      response.end();
    }
  });
};

const redirect = (path, response) => {
  response.statusCode = 302;
  response.setHeader("location", path);
  response.end();
};

module.exports = { readFile, redirect };