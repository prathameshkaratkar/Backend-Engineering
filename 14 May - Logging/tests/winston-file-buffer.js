const winston  = require("winston");

const iteration = 100000;

// Create a logger with a custome transport for batching and asynchronous logging.

const logger = winston.createLogger({
    transports: [
        new winston.transports.File({
            filename: "logfile.log",
            handleExceptions: true,
            maxsize: 5242880,  // 5MB
            maxFiles: 5
        })
    ]
})

// Define the log message

const logMessage = "this is a log message";

console.time("Winston-File");

// log the message asynchronously

let count = 0;

for(let i = 0; i < iteration; i++) {
    logger.info(logMessage);
    count++;
    if(count===iteration){
        console.timeEnd("Winston-File");
    }
}