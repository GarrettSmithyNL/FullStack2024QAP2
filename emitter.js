const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

const { format, getYear } = require("date-fns");
const { v4: uuid } = require("uuid");

if (myEmitter.listenerCount("event") === 0) {
  myEmitter.on("event", (event, message) => {
    const dateTime = `${format(new Date(), "yyyyMMdd HH:mm:ss")}`;
    const logItem = `${dateTime} - ${event} - ${message} - ${uuid()}`;
    console.log(logItem);
  });
}

if (myEmitter.listenerCount("error") === 0) {
  myEmitter.on("error", (event, message) => {
    const dateTime = `${format(new Date(), "yyyyMMdd HH:mm:ss")}`;
    const logItem = `${dateTime} - ${event} - ${message} - ${uuid()}`;
    console.log(logItem);
  });
}

module.exports = myEmitter;
