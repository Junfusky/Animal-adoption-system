// require packages
require('express-async-errors');
const jwt = require('jsonwebtoken');
const winston = require('winston');
const logger = require('./config/logger');
const mongoose = require('mongoose');
require('winston-mongodb');
const config = require('config');
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const error =  require('./middleware/error');

const user = require('./routes/users');
const animal = require('./routes/animals');
const auth = require('./routes/auth');

const express = require('express');
const app = express();

// handle errors
process.on('exceptionHandlers', (ex) => {
    logger.error(ex.message, ex);
    process.exit(1);
})

process.on('uncaughtException', (ex) => {
    logger.error(ex.message, ex);
    process.exit(1);
})

winston.add(new winston.transports.MongoDB({db: 'mongodb://localhost/adoption-system', level: 'error'}));

// connect to database
mongoose.connect('mongodb://localhost/adoption-system', { useUnifiedTopology: true })
    .then(() => logger.info('Connected to mongodb!'))
    .catch(err => logger.error('Cannot conencted to mongodb...', err));


if(!config.has('jwtPrivateKey')) {
    logger.error('FATAL ERROR: jwtPrivateKey is not defined.');
    process.exit(1);
}

// deal with CORS
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT, PATCH, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept,Authorization, X-Requested-With, x-auth-token, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    next();
});

app.use(express.json());
app.use('/api/users', user);
app.use('/api/animals', animal);
app.use('/api/auth', auth);
app.use(error);

const port = process.env.PORT || 3000;
app.listen(port, () => logger.info(`Listening on port ${port}...`));
