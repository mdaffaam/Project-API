// routes/users.js
const express = require('express');
const router = express.Router();
const { createUser, getUsers } = require('../controllers/userController');
const { verifyToken } = require('../controllers/authController');

router.post('/', verifyToken, createUser);
router.get('/', verifyToken, getUsers);

module.exports = router;
