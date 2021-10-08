const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf } = format;

const logFormat = printf(({ level, message, timestamp, stack }) => {
  return `${timestamp} [${label}] ${level}: ${stack || message}`;
});
 
const logger = createLogger({
  // level: 'error',
  format: combine(
    format.colorize(),
    timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.errors({stack: true}),
    logFormat
  ),
  // defaultMeta: { service: 'user-service' },
  transports: [
    new transports.Console(),
    new transports.File({ filename: 'combined.log' }),
  ],
  exceptionHandlers: [
    new transports.File({ filename: 'exceptions.log' })
  ]
});

module.exports = logger;