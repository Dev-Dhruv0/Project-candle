const jwt = require('jsonwebtoken');

// Middleware function for verifying JWT
const authenticateToken = (req, res, next) => {

    // Get token from header
    const authHeader = req.headers['authorization'];
    console.log('Authorization Header: ', authHeader);

    // Extract token from "Bearer <token>"
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) return res.status(401).json({ error: 'No token provided' });

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.status(403).json({ error: 'Invalid token!' });

        // Attaches user to request object
        req.user = user;

        //Proceeds to the next middleware or route handler 
        next();
    });
};

module.exports = authenticateToken;