// middleware/validationMiddleware.js

const { body } = require('express-validator');

// Validation middleware
const validateEmail = [
  body('email').isEmail().withMessage('Invalid email address')
];

module.exports = validateEmail;
