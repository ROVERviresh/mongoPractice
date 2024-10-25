const mongoose = require('mongoose');

// Define the schema for personal info
const personSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minlength: 2
  },
  lastName: {
    type: String,
    required: true,
    minlength: 2
  },
  email: {
    type: String,
    unique: true,  // Ensures the email field is unique
    required: [true, 'Email is required'],  // Ensure email is provided
},
  age: {
    type: Number,
    required: true,
    min: 0  // age cannot be negative
  },
  isMarried: {
    type: Boolean,
    default: false  // default is single
  }
});

// Create a model
const Person = mongoose.model('Person', personSchema);

module.exports = Person;
