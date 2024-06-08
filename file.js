const fs = require("fs");

const readFile = (path, response) => {
  fs.readFile(path, "utf8", (error, data) => {
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
};

module.exports = { readFile };
