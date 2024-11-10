// routes/notifyRoutes.js

const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const { addNotifyUser, getAllNotifyUsers } = require('../controllers/notifyController');
const { authenticateUser } = require('../middleware/authMiddleware');

// Route to add a new notify_user document
router.post(
  '/add',
  [
    body('email').isEmail().withMessage('Invalid email address')
  ],
  addNotifyUser
);

// Route to get all notify_user documents
router.get(
  '/all',
  authenticateUser, // Add authentication middleware here
  getAllNotifyUsers
);

module.exports = router;
