import logger from "./services/logging/logging.service.js";

const iteration = 5;

console.time("Winston-File");

// Define the log message

const logMessage = " this is a log message";

// Log the message

for (let i = 0; i < iteration; i++) {
  logger.info(`${logMessage} ${i}`);
}

try{
    const uName =  "Manas";
    uName = "Rahul"
} catch(err) {
    logger.error(err)
}

console.timeEnd("Winston-File");