// config/conn.js

const mongoose = require('mongoose');
const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://rokosoko:rokosoko@cluster0.g8g7vdj.mongodb.net/rokosoko?retryWrites=true&w=majority');
    console.log('MongoDB Connected');
  } catch (error) {
    console.error('MongoDB Connection Error:', error);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
