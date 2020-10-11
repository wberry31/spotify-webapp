const jwt = require('express-jwt');

const getTokenFromHeader = (req) => {
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        return req.headers.authorization.split(' ')[0];
    }

    return null;
}

module.exports = jwt({
    secret: process.env.SECRET,
    userProperty: 'payload',
    getToken: getTokenFromHeader
});
