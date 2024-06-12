// Imports the necessary modules
const fs = require("fs");
const myEmitter = require("./emitter.js");

/**
 * Reads a file from the specified path and sends the content as a response.
 *
 * @param {string} path - The path of the file to be read.
 * @param {object} response - The response object to send the file content.
 */
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

/**
 * Redirects the user to the specified path.
 * @param {string} path - The path to redirect to.
 * @param {object} response - The response object.
 */
const redirect = (path, response) => {
  response.statusCode = 302;
  response.setHeader("location", path);
  response.end();
};

// Exports the functions
module.exports = { readFile, redirect };
