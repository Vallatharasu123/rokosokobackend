// controllers/users/deleteUser.js

const User = require('../../models/User');

exports.deleteUser = async (req, res) => {
  try {
    const { ids } = req.body;

    // Delete multiple or single user based on the IDs provided
    const filter = Array.isArray(ids) ? { _id: { $in: ids } } : { _id: ids };
    const result = await User.deleteMany(filter);

    if (result.deletedCount === 0) {
      return res.status(404).json({ message: 'User(s) not found' });
    }

    res.json({ message: 'User(s) deleted successfully' });
  } catch (error) {
    console.error('Error deleting user(s):', error);
    res.status(500).json({ message: 'Server Error' });
  }
};
