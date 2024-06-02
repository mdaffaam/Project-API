// controllers/mealController.js
const { createMeal, getMeals } = require('../models/Meal');

exports.createMeal = async (req, res) => {
  try {
    const mealId = await createMeal(req.body);
    res.status(201).json({ id: mealId });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getMeals = async (req, res) => {
  try {
    const meals = await getMeals();
    res.status(200).json(meals);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
