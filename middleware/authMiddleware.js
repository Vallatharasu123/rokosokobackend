// middleware/authMiddleware.js

const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Middleware to authenticate user
exports.authenticateUser = async (req, res, next) => {
  // Get token from header
  const token = req.header('x-auth-token');

  // Check if token exists
  if (!token) {
    return res.status(401).json({ message: 'Authorization denied. No token provided' });
  }

  try {
    // Verify token
    console.log("Token:", token);
    console.log("Secret Key:", process.env.JWT_SECRET);
    const decoded = jwt.verify(token, process.env.JWT_SECRET, { algorithms: ['HS256'] });

    // Attach user from token payload to request object
    console.log(decoded);
    req.user = await User.findById(decoded.userId).select('-password');
    next();
  } catch (error) {
    console.error('Authentication Error:', error);
    res.status(401).json({ message: 'Authorization denied. Invalid token' });
  }
};
