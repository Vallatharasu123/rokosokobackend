// dbSeeder.js

const bcrypt = require('bcrypt');
const User = require('../models/User');

const seedDatabase = async () => {
  try {
    // Check if the default user already exists
    const existingUser = await User.findOne({ email: 'official@rokosoko.com' });
    if (existingUser) {
      console.log('Default user already exists');
      return;
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash('123456', 10);

    // Create the default user
    const defaultUser = new User({
      username: 'rokosoko',
      email: 'official@rokosoko.com',
      password: hashedPassword
    });

    await defaultUser.save();
    console.log('Default user created successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
  }
};

module.exports = seedDatabase;
