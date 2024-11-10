// controllers/notifyController.js

const { validationResult } = require('express-validator');
const NotifyUser = require('../models/NotifyUser');

// Add a new notify_user document
exports.addNotifyUser = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(200).json({ errors: errors.array() });
    }

    const { email } = req.body;
    const existingUser = await NotifyUser.findOne({ email });
    if (existingUser) {
      return res.status(200).json({ message: 'Email already exists' });
    }

    const newUser = new NotifyUser({ email });
    await newUser.save();
    res.status(200).json({ message: 'User notified successfully' });
  } catch (error) {
    console.error('Error adding user:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Get all notify_user documents
exports.getAllNotifyUsers = async (req, res) => {
  try {
    const users = await NotifyUser.find();
    res.json(users);
  } catch (error) {
    console.error('Error getting users:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};
