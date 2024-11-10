const express = require('express');
const router = express.Router();
const { addUser } = require('../controllers/users/addUser');
const { editUser } = require('../controllers/users/editUser');
const { deleteUser } = require('../controllers/users/deleteUser');
const { getUsers } = require('../controllers/users/getUsers');  // Import the new getUsers controller

// Add a new user
router.post('/add', addUser);

// Edit user(s)
router.put('/edit', editUser);

// Delete user(s)
router.delete('/delete', deleteUser);

// Get user(s) based on provided IDs or all users
router.get('/get', getUsers);  // Corrected route for fetching users

module.exports = router;
