const mongoose = require('mongoose');

// create Schemas and models here
const Schema = mongoose.Schema;

// create object for the model
const assetSchema = new Schema({
    _id: {
        type: String,
        required: true,
    },
    assets: {
        type: Array,
        required: true,
    }
});

// creates the actual model
const assets = mongoose.model('Assets', assetSchema, 'assets');
module.exports = assets;