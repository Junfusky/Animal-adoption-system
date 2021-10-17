const winston = require('winston');

// catch the errors in actions, while does not catch the errors when the server starts up
module.exports = function(err, req, res, next) {
    //log the exception
    console.log(err)
    winston.error(err.message, err);
    res.status(500).send('Something failed.');
}