const User = require('../../models/User');

exports.deleteUser = async (req, res) => {
  try {
    const { ids } = req.body;

    // Delete multiple or single user based on the IDs provided
    const filter = Array.isArray(ids) ? { _id: { $in: ids } } : { _id: ids };
    const result = await User.deleteMany(filter);

    if (result.deletedCount === 0) {
      return res.status(200).json({ message: 'No users were deleted. Please check the user IDs.' });
    }

    res.status(200).json({ message: 'User(s) deleted successfully', deletedCount: result.deletedCount });
  } catch (error) {
    console.error('Error deleting user(s):', error);
    res.status(200).json({ message: 'Server Error while deleting user(s). Please try again later.' });
  }
};
