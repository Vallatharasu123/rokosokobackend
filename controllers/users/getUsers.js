const User = require('../../models/User');

exports.getUsers = async (req, res) => {
  try {
    const { ids } = req.query; // Getting ids from query parameters

    let users;

    // If ids are provided, fetch users by their IDs
    if (ids) {
      // Convert the string of IDs into an array (assuming the IDs are comma-separated in the query string)
      const idArray = ids.split(',');

      // Fetch users based on the provided IDs
      users = await User.find({ _id: { $in: idArray } });

      // If no users found with the provided IDs, return a message
      if (users.length === 0) {
        return res.status(200).json({ message: 'No users found for the provided IDs' });
      }
    } else {
      // If no ids are provided, fetch all users
      users = await User.find();

      // If no users exist in the database, return a message
      if (users.length === 0) {
        return res.status(200).json({ message: 'No users found in the database' });
      }
    }

    // Return the list of users with a success message
    res.status(200).json({ message: 'Users fetched successfully', users });
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(200).json({ message: 'Server Error. Please try again later.' });
  }
};
