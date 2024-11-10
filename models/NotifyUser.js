// models/NotifyUser.js
const mongoose = require('mongoose');

const notifyUserSchema = new mongoose.Schema({
  datetime: { type: Date, default: Date.now },
  email: { type: String, unique: true }
});

const NotifyUser = mongoose.model('notify_user', notifyUserSchema);

module.exports = NotifyUser;

//hi
