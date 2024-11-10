// routes/userRoutes.js

const express = require('express');
const router = express.Router();
const { addUser } = require('../controllers/users/addUser');
const { editUser } = require('../controllers/users/editUser');
const { deleteUser } = require('../controllers/users/deleteUser');

// Add a new user
router.post('/add', addUser);

// Edit user(s)
router.put('/edit', editUser);

// Delete user(s)
router.delete('/delete', deleteUser);

module.exports = router;
