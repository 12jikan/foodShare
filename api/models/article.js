const mongoose = require('mongoose');

// create Schemas and models here
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
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

const Person = mongoose.model('Article', articleSchema, 'recipes');

module.exports = Person;