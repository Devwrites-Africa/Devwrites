const winston = require('winston');

// create winston logger
const logger = winston.createLogger({
    level: 'info',
    transports: [
        new winston.transports.Console({
            format: winston.format.combine(winston.format.colorize({ all: true }))
        }),
        new winston.transports.File({ filename: './logger/logs.log', level: 'error' })
    ],
    exceptionHandlers: [
        new winston.transports.File({ filename: './logger/exceptions.log' })
    ]
})

module.exports = logger;