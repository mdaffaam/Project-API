// controllers/userController.js
const { createUser, getUsers } = require('../models/User');

exports.createUser = async (req, res) => {
  try {
    const userId = await createUser(req.body);
    res.status(201).json({ id: userId });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await getUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
