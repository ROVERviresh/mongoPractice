const mongoose = require('mongoose');

// Define the schema for food items
const foodSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true
  },
  Color: {
    type: String,
    required: true
  },
  Price: {
    type: Number,
    required: true,
    min: 0 // Make sure price is non-negative
  }
});

// Create and export the Food model
const Food = mongoose.model('Food', foodSchema);
module.exports = Food;
