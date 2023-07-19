const jwt = require('jsonwebtoken');

async function authenticate(req, res, next) {
    try {
        const authorization = req.headers.authorization;
        const token = authorization.split(' ').pop();
        
        jwt.verify(token, process.env.JWT_SECRET);
        next();
    } catch (e) {
        console.log(e);
        res.status(401).send("Not authorized");
    }
}

module.exports = { authenticate };