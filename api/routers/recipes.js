const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

// stuff for mongoose|mongo
const creds = require('../creds/mongodb/creds.json');
const dbName = "foodShare";
const uri = `mongodb+srv://12jikan:${creds.password}@cluster0-nxdlq.mongodb.net/${dbName}?retryWrites=true`;


const ObjectId = mongoose.Types.ObjectId;

// models go here
const recipeModel = require('../models/recipeModel.js');


// code under here
mongoose.connect(uri, { useNewUrlParser: true });

router.get('/', (req, res) => {
    res.send(`Welcome to the Recipes API use "api/recipes" route to post/get data`);
});

router.get('/recipesAll', (req, res) => {
    
    const _recipe = recipeModel.find();

    _recipe.exec((err, obj) => {
        if(err) console.error(err);
        res.send(obj);
    });

});

router.get('/recipe', (req, res) => {
    res.send('works dude!');
    console.log(req);
});

router.post('/recipes', (req, res) => {
    // create the article object
    let recipeObj = {
        _id: new ObjectId,
        name: req.body.name,
        date: Date.now(),
        title: req.body.title,
        desc: req.body.desc,
        steps: req.body.steps,
    };

    // creates a new Article (document)
    let _recipe = new recipeModel(recipeObj);
    
    _recipe
    .save()
    .then(result => {
        console.log(result)
        res.send(result);
    })
    .catch(err => {
        console.log(err.name + ":" + "\n", err.message);

        res.send({ 
            Error: err.name,
            Message: err.message,
        });
    });
});

module.exports = router;