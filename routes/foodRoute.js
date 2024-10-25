const express = require('express');
const router = express.Router();
const Food = require('../models/foods'); 


// POST route to create a new food item
router.post('/', async (req, res) => {
    try {
        const newFood = new Food(req.body); // Use the 'Food' model to create a new document
        const savedFood = await newFood.save(); // Save the new food item to MongoDB
        
        console.log('Saved food:', savedFood); // Log the saved food item
        res.status(200).send(savedFood); // Respond with the saved document
    } catch (error) {
        console.error('Error creating food:', error); // Log the error in the console
        res.status(500).send({ error: 'Failed to create foods', details: error.message }); // Send error response
    }
});

module.exports = router;