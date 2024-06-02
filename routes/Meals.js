// routes/meals.js
const express = require('express');
const router = express.Router();
const { createMeal, getMeals } = require('../controllers/mealController');
const { verifyToken } = require('../controllers/authController');

router.post('/', verifyToken, createMeal);
router.get('/', verifyToken, getMeals);

module.exports = router;
