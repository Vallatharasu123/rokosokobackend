// models/User.js

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  status: {
    type: String,
    default: 'active', // Default status; can be 'active', 'inactive', etc.
    enum: ['active', 'Deactivated', 'Suspended', 'inactive'] // Optional, restricts status to specific values
  },
  roles: {
    type: [String],
    default: ['user'], // Default role for new users is 'user'
    enum: ['admin', 'user', 'moderator', 'guest'] // Roles the user can have
  },
  mobile: String,
  aboutMe: String,
  gender: String,
  state: String,
  country: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;
