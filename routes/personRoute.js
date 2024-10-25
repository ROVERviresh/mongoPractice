const express = require('express');
const router = express.Router();
const Person = require('../models/Personaldata');  // Import your model

// Route to handle creating a person
router.post('/', async (req, res) => {
    const data = req.body;
    try {
        const newPerson = new Person(data);
        const savedPerson = await newPerson.save();
        res.status(200).send(savedPerson);
    } catch (error) {
        console.error('Error creating person:', error);
        res.status(500).send({ error: 'Failed to create person' });
    }
});

//route to how to update the info
router.put('/:id',async(req,res)=>{
    try{
        const personId = req.params.id; //extract id from url parameter
        const updatedData = req.body;  // updated data for tha person

        const response = await Person.findByIdAndUpdate(personId,updatedData, {
            new : true, //return updated document
            runValidators : true,//run mangoose validation
        })

        if(!response){
            return res.status(404).json({error : 'person not found'})
        }
        console.log("data updated");
        res.status(200).json(response);
        
    } catch (error){
        console.error('Error updating person:', error);
        res.status(500).send({ error: 'Failed to updatete person' });
    }
})

//to detete the item
router.delete('/:id',async(req,res)=>{
    try{
        const personId = req.params.id; //extract id from url parameter
        
        const response = await Person.findByIdAndUpdate(personId);

        if(!response){
            return res.status(404).json({error : 'person not found'})
        }
        console.log("data updated");
        res.status(200).json({message: 'successfully deleted person'});
        
    } catch (error){
        console.error('Error deleting person:', error);
        res.status(500).send({error: 'Failed to updatete person' });

    }
})


router.get('/', (req, res) => {
    res.send("Namman post route baala nakra madta ede...");
});



module.exports = router;
