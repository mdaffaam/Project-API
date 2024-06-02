// models/meal.js
const pool = require('./db');

const createMeal = async (meal) => {
  const { name, ingredients, nutritionalInfo, tags } = meal;
  const [result] = await pool.query(
    'INSERT INTO Meals (name, ingredients, nutritionalInfo, tags) VALUES (?, ?, ?, ?)',
    [name, JSON.stringify(ingredients), JSON.stringify(nutritionalInfo), JSON.stringify(tags)]
  );
  return result.insertId;
};

const getMeals = async () => {
  const [rows] = await pool.query('SELECT * FROM Meals');
  return rows.map(row => ({
    ...row,
    ingredients: JSON.parse(row.ingredients),
    nutritionalInfo: JSON.parse(row.nutritionalInfo),
    tags: JSON.parse(row.tags)
  }));
};

module.exports = { createMeal, getMeals };
