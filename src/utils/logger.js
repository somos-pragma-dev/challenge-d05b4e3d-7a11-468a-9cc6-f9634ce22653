const winston = require('winston');

const logger = winston.createLogger({
  transports: [
    new winston.transports.File({ filename: 'audit.log' })
  ]
});

exports.logOperation = (operation, user) => {
  logger.info(`${operation}: ${JSON.stringify(user)}`);
};