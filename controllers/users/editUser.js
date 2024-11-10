const User = require('../../models/User');

exports.editUser = async (req, res) => {
  try {
    const { ids, updateData } = req.body;

    // Check if the updateData contains status or roles
    if (updateData.status && !['active', 'Deactivated', 'Suspended', 'inactive'].includes(updateData.status)) {
      return res.status(200).json({ message: 'Invalid status value. Please use a valid status.' });
    }

    if (updateData.roles && !Array.isArray(updateData.roles)) {
      return res.status(200).json({ message: 'Roles should be an array. Please provide an array of roles.' });
    }

    // Update multiple or single user based on the IDs provided
    const filter = Array.isArray(ids) ? { _id: { $in: ids } } : { _id: ids };
    const result = await User.updateMany(filter, updateData);

    if (result.modifiedCount === 0) {
      return res.status(200).json({ message: 'No users were updated. Please check the user IDs or the data.' });
    }

    res.status(200).json({ message: 'User(s) updated successfully', modifiedCount: result.modifiedCount });
  } catch (error) {
    console.error('Error editing user(s):', error);
    res.status(200).json({ message: 'Server Error while updating user(s). Please try again later.' });
  }
};
