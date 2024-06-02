// models/user.js
const pool = require('./db');
const bcrypt = require('bcrypt');

const createUser = async (user) => {
  const { name, email, password, preferences, healthGoals } = user;
  const hashedPassword = await bcrypt.hash(password, 10);
  const [result] = await pool.query(
    'INSERT INTO Users (name, email, password, preferences, healthGoals) VALUES (?, ?, ?, ?, ?)',
    [name, email, hashedPassword, JSON.stringify(preferences), healthGoals]
  );
  return result.insertId;
};

const getUserByEmail = async (email) => {
  const [rows] = await pool.query('SELECT * FROM Users WHERE email = ?', [email]);
  if (rows.length === 0) return null;
  return {
    ...rows[0],
    preferences: JSON.parse(rows[0].preferences)
  };
};

const getUsers = async () => {
  const [rows] = await pool.query('SELECT * FROM Users');
  return rows.map(row => ({
    ...row,
    preferences: JSON.parse(row.preferences)
  }));
};

module.exports = { createUser, getUserByEmail, getUsers };
