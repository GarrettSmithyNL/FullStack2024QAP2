// Import the required modules and functions
const EventEmitter = require("events");
const path = require("path");
const fs = require("fs");
const fsPromise = require("fs").promises;
const { format, getYear } = require("date-fns");
const { v4: uuid } = require("uuid");

// Create a custom class that extends EventEmitter
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

// Check if the event listener is already added
if (myEmitter.listenerCount("event") === 0) {
  // Add an event listener for the "event" event
  myEmitter.on("event", async (event, message) => {
    // Create a log item with the current date and time
    const dateTime = `${format(new Date(), "yyyyMMdd HH:mm:ss")}`;
    const logItem = `${dateTime} - ${event} - ${message} - ${uuid()}`;
    try {
      // Create a folder for the logs if it does not exist
      const currentFolder = "logs/" + getYear(new Date());
      if (!fs.existsSync(path.join(__dirname, "logs/"))) {
        await fsPromise.mkdir(path.join(__dirname, "logs/"));
        if (!fs.existsSync(path.join(__dirname, currentFolder))) {
          await fsPromise.mkdir(path.join(__dirname, currentFolder));
        }
      } else {
        if (!fs.existsSync(path.join(__dirname, currentFolder))) {
          await fsPromise.mkdir(path.join(__dirname, currentFolder));
        }
      }
      // Append the log item to the log file
      const fileName = `${format(new Date(), "yyyyMMdd")}` + "_http_events.log";
      await fsPromise.appendFile(
        path.join(__dirname, currentFolder, fileName),
        logItem + "\n"
      );
    } catch (err) {
      // Emit an error event if there is an issue with creating the folder or file
      myEmitter.emit("error", "ERROR", "Folder or File already created");
    }
  });
}

// Check if the error listener is already added
if (myEmitter.listenerCount("error") === 0) {
  // Add an event listener for the "error" event
  myEmitter.on("error", async (event, message) => {
    // Create a log item with the current date and time
    const dateTime = `${format(new Date(), "yyyyMMdd HH:mm:ss")}`;
    const logItem = `${dateTime} - ${event} - ${message} - ${uuid()}`;
    try {
      // Create a folder for the logs if it does not exist
      const currentFolder = "logs/" + getYear(new Date());
      if (!fs.existsSync(path.join(__dirname, "logs/"))) {
        await fsPromise.mkdir(path.join(__dirname, "logs/"));
        if (!fs.existsSync(path.join(__dirname, currentFolder))) {
          await fsPromise.mkdir(path.join(__dirname, currentFolder));
        }
      } else {
        if (!fs.existsSync(path.join(__dirname, currentFolder))) {
          await fsPromise.mkdir(path.join(__dirname, currentFolder));
        }
      }
      // Append the log item to the log file
      const fileName = `${format(new Date(), "yyyyMMdd")}` + "_http_events.log";
      await fsPromise.appendFile(
        path.join(__dirname, currentFolder, fileName),
        logItem + "\n"
      );
    } catch (err) {
      // Emit an error event if there is an issue with creating the folder or file
      myEmitter.emit("error", "ERROR", "Folder or File already created");
    }
  });
}

// Export the custom event emitter
module.exports = myEmitter;
