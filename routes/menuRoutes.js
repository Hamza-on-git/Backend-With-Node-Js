const express = require('express');
const router = express.Router();
const menuItem = require('../models/menuItem');


// POST method to add a menu item
router.post('/', async (req,res) => {
    try{

        const data = req.body //Assuming the request body contains the person data

        // Create a new Person document using the Mongoose model
        const newMenu = new menuItem(data);
    
        // Save the new persom to the database
        const response = await newMenu.save();
        console.log("data saved successfully");
        res.status(200).json(response);
         
    }catch(err) {
        console.log("Error saving person:", err);
        res.status(500).json({error: 'Internal server error'})

    }
   
});

// Get Method to get the menu items
router.get('/',async (req, res)=>{
    try {
        const data = await  menuItem.find();
        console.log("data fetched successfully");
        res.status(200).json(data);
         

    }catch(err){
        console.log("Error getting person:", err);
        res.status(500).json({error: 'Internal server error'})
    }
})

// Get Method to get the menu items
router.get('/:taste',async (req, res)=>{
    try {
        // const data = await  menuItem.find();
        // console.log("data fetched successfully");
        // res.status(200).json(data);
         

    }catch(err){
        // console.log("Error getting person:", err);
        // res.status(500).json({error: 'Internal server error'})
    }
})
module.exports = router