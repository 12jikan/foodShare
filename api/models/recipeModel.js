const mongoose = require('mongoose');

// create Schemas and models here
const Schema = mongoose.Schema;

// create object for the model
const recipeSchema = new Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    date: Object,
    name: { 
        type: String,
        required: true,
    },
    desc: { 
        type: String,
        required: true,
    },
    steps: {
        type: Object,
    }
});

// creates the actual model
const recipes = mongoose.model('Recipe', recipeSchema, 'recipes');
module.exports = recipes;