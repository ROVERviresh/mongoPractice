const express = require('express');
const app = express();
const port = 7000;
const db = require('./db'); // Your database connection
const Food = require('./models/foods'); // Correct model import for Food
const Person = require('./models/Personaldata'); // Assuming this model exists



// Middleware
app.use(express.json()); // Use express's built-in body parser
app.use(express.urlencoded({ extended: true }));

 //import the person routes
const personRoutes = require('./routes/personRoute'); 

//import food routes
const foodRoutes = require('./routes/foodRoute');   


//use the routes as middlewares
app.use('/details',personRoutes);
app.use('/foods',foodRoutes);


// Basic GET routes for testing
app.get('/:joke', (req, res) => {
    //res.send("I'm performing a GET operation");
    res.send(`nine dodda joke kano sade ${req.params.joke}`);
});


// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
