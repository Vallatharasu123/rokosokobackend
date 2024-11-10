// controllers/users/editUser.js

const User = require('../../models/User');

exports.editUser = async (req, res) => {
  try {
    const { ids, updateData } = req.body;

    // Check if the updateData contains status or roles
    if (updateData.status && !['active', 'Deactivated', 'Suspended', 'inactive'].includes(updateData.status)) {
      return res.status(400).json({ message: 'Invalid status value' });
    }

    if (updateData.roles && !Array.isArray(updateData.roles)) {
      return res.status(400).json({ message: 'Roles should be an array' });
    }

    // Update multiple or single user based on the IDs provided
    const filter = Array.isArray(ids) ? { _id: { $in: ids } } : { _id: ids };
    const result = await User.updateMany(filter, updateData);

    if (result.modifiedCount === 0) {
      return res.status(404).json({ message: 'User(s) not found' });
    }

    res.json({ message: 'User(s) updated successfully' });
  } catch (error) {
    console.error('Error editing user(s):', error);
    res.status(500).json({ message: 'Server Error' });
  }
};
