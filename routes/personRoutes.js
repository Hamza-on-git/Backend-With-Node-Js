const express = require('express');
const router = express.Router();
const person = require('./../models/person');

// POST route to add a person
router.post('/', async (req,res) => {
    try{

        const data = req.body //Assuming the request body contains the person data

        // Create a new Person document using the Mongoose model
        const newPerson = new person(data);
    
        // Save the new persom to the database
        const response = await newPerson.save();
        console.log("data saved successfully");
        res.status(200).json(response);
         
    }catch(err) {
        console.log("Error saving person:", err);
        res.status(500).json({error: 'Internal server error'})

    }
   
});


// GEt method to get the person.
router.get('/',async (req, res)=>{
    try {
        const data = await  person.find();
        console.log("data fetched successfully");
        res.status(200).json(data);
         

    }catch(err){
        console.log("Error getting person:", err);
        res.status(500).json({error: 'Internal server error'})
    }
})

router.get('/:workType', async(req, res) => {
    
    try {
          // Extract the work type from the URL parameter
         const workType = req.params.workType;

        if (workType == 'chef' ||  'manager' || 'waiter') {
            const response = await person.find({work: workType});
            console.log('response fetched');
            res.status(200).json(response);
         } 

        else {
            res.status(404).json({error: 'Invalid work type'})
         }
    }catch(err) {
        console.log(err);
        res.status(500).json({error: 'Internal server error'})
    }
})

router.put('/:id', async(req, res) => {
    try {
        // Extract the id from URL parameter
        const personID = req.params.id;

        // Updated data for the person
        const updatedPersonData = req.body;

        const response = await person.findByIdAndUpdate(personID, updatedPersonData, {
            new: true, //return the updated document
            runValidators: true, //Run mongoose validation.
        })


        if(!response) {
            return res.status(404).json({error: 'Person not found'})
        }

        console.log('data updated');
        res.status(200).json(response);

    } catch(err) {
        console.log(err);
        res.status(500).json({error: 'Internal server error'})
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const personID = req.params.id;
        
        // Assuming you have a person model
        const response = await person.findByIdAndDelete(personID);

        if (!response) {
            return res.status(404).json({error: 'Person not found'})
        }
        console.log('data deleted');
        res.status(200).json({message: 'person Deleted successfully'});

    } catch(err) {
        console.log(err);
        res.status(500).json({error: 'Internal server Error'})
    }
})

module.exports = router;