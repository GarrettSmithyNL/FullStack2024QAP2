const EventEmitter = require("events");
const path = require("path");
const fs = require("fs");
const fsPromise = require("fs").promises;

class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

const { format, getYear } = require("date-fns");
const { v4: uuid } = require("uuid");

if (myEmitter.listenerCount("event") === 0) {
  myEmitter.on("event", async (event, message) => {
    const dateTime = `${format(new Date(), "yyyyMMdd HH:mm:ss")}`;
    const logItem = `${dateTime} - ${event} - ${message} - ${uuid()}`;
    try {
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
      const fileName = `${format(new Date(), "yyyyMMdd")}` + "_http_events.log";
      await fsPromise.appendFile(
        path.join(__dirname, currentFolder, fileName),
        logItem + "\n"
      );
    } catch (err) {
      myEmitter.emit("error", "ERROR", "Folder or File already created");
    }
  });
}

if (myEmitter.listenerCount("error") === 0) {
  myEmitter.on("error", async (event, message) => {
    const dateTime = `${format(new Date(), "yyyyMMdd HH:mm:ss")}`;
    const logItem = `${dateTime} - ${event} - ${message} - ${uuid()}`;
    try {
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
      const fileName = `${format(new Date(), "yyyyMMdd")}` + "_http_events.log";
      await fsPromise.appendFile(
        path.join(__dirname, currentFolder, fileName),
        logItem + "\n"
      );
    } catch (err) {
      myEmitter.emit("error", "ERROR", "Folder or File already created");
    }
  });
}

module.exports = myEmitter;
