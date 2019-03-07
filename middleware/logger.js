// This is a middleware function to log req,resp activity (uses parameter 'next' last to move to the next middleware function in stack)
// Bring in moment to capture date and time logging for logger()
const moment = require('moment');
const logger = (req, res, next) => {
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}: ${moment().format()}`);
    next();
};

module.exports = logger;