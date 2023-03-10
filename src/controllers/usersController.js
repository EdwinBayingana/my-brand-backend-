import User from '../models/User.js';

// Function to list all Users
const listAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find();
    if (!allUsers) {
      res
        .status(500)
        .json({ message: 'Server error - No Users at the moment' });
    } else {
      res.status(200).json({
        message: `Total number of users is ${allUsers.length}`,
        data: allUsers,
      });
    }
  } catch (error) {
    console.log('Error fetching all users:', error.message);
  }
};

// Function to update a User's isAdmin status
const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { isAdmin } = req.body;
    const _id = id;

    const userToUpdate = await User.findByIdAndUpdate(
      id,
      { isAdmin },
      { new: true },
    );
    if (!userToUpdate) {
      return res.status(404).json({
        message: `User with id '${id}' was not found`,
      });
    } else {
      return res.status(200).json({
        message: 'User role updated successfully',
        data: userToUpdate,
      });
    }
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

export { listAllUsers, updateUser };
