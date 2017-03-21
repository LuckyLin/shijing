/**
 * This program defines a winston logger.
 *
 * @author fluency.03@gmail.com (Chang Liu)
 */

// node packages
var winston = require('winston');
winston.emitErrs = true;

/**
 * [logger description]
 * @type {winston}
 */
var logger = new winston.Logger({
  transports: [
    new winston.transports.File({
      level: 'info',
      filename: 'shi.log',
      handleExceptions: true,
      json: true,
      maxsize: 5242880, //5MB
      maxFiles: 5,
      colorize: false
    }),
    new winston.transports.Console({
      level: 'debug',
      handleExceptions: true,
      json: false,
      colorize: true
    })
  ],
  exitOnError: false
});

// export
module.exports = logger;
module.exports.stream = {
  write: function(message, encoding){
    logger.info(message);
  }
};