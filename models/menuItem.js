const mongoose = require('mongoose');

// Define the person schema
const menuItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    },

    taste: {
        type: String,
        enum: ['sweet', 'spicy', 'sour'],
        required: true
    },

    is_drink: {
        type: Boolean,
        default: false
    },

    ingredients: {
        type: [String],
        default: []
    },

    num_sales: {
        type: Number,
        defualt: 0
    }
})

// Create person model

const menuItem = mongoose.model('Person', menuItemSchema);
module.exports = menuItem;

