const bcrypt = require('bcryptjs');
const User = require('../../models/User');

exports.addUser = async (req, res) => {
  try {
    const { name, username, email, mobile, password, aboutMe, gender, state, country, status, roles } = req.body;

    // Check if the user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(200).json({ message: 'User already exists. Please try with different email.' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user with status and roles
    user = new User({
      name,
      username,
      email,
      mobile,
      password: hashedPassword,
      aboutMe,
      gender,
      state,
      country,
      status: status || 'active',  // Default to 'active' if no status is provided
      roles: roles || ['user']     // Default to ['user'] if no roles are provided
    });

    await user.save();

    res.status(200).json({ message: 'User added successfully', user: user });
  } catch (error) {
    console.error('Error adding user:', error);
    res.status(200).json({ message: 'Server Error. Please try again later.' });
  }
};
