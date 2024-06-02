// app.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { connectDB } = require('./models/db');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Define Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/users', require('./routes/Users'));
app.use('/api/meals', require('./routes/Meals'));

module.exports = app;
