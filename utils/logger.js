const { createLogger, format, transports } = require("winston");
const path = require("path");

const logFormat = format.combine(
  format.timestamp({
    format: "YYYY-MM-DD HH:mm:ss"
  }),
  format.errors({ stack: true }),
  format.printf(({ timestamp, level, message, stack }) => {
    return `${timestamp} [${level.toUpperCase()}]: ${stack || message}`;
  })
);

console.log(logFormat);

const logger = createLogger({
  level: "info",
  format: logFormat,
  transports: [


    
    // console logs (live)
    new transports.Console(),

    // error logs
    new transports.File({
      filename: path.join(__dirname, "../logs/error.log"),
      level: "error"
    }),

    // all logs
    new transports.File({
      filename: path.join(__dirname, "../logs/combined.log")
    })
  ]
});

module.exports = logger;