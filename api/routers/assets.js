const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

// stuff for mongoose|mongo
const creds = require('../creds/mongodb/creds.json');
const dbName = "foodShare";
const uri = `mongodb+srv://12jikan:${creds.password}@cluster0-nxdlq.mongodb.net/${dbName}?retryWrites=true`;


const ObjectId = mongoose.Types.ObjectId;

// models go here
const assetModel = require('../models/assetModel.js');


// code under here
mongoose.connect(uri, { useNewUrlParser: true });

router.get('/ingredients', (req, res) => {
    
    const _ingredient = assetModel.findById("ingredients", "-_id");
    
    _ingredient.exec((err, obj) => {
        if(err) console.err(err);
        res.send(obj);
    });
});

router.get('/tools', (req, res) => {
    
    const _tools = assetModel.findById("tools", "-_id");
    
    _tools.exec((err, obj) => {
        if(err) console.err(err);
        res.send(obj);
    });
});

module.exports = router;