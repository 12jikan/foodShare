
//stuff that I need to import
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Article = require('./models/article')

// stuff for mongoose|mongo
const creds = require('./creds/mongodb/creds.json')
const dbName = "foodShare";
const uri = `mongodb+srv://12jikan:${creds.password}@cluster0-nxdlq.mongodb.net/${dbName}?retryWrites=true`;

// declarative stuff
const app = express();
const ObjectId = mongoose.Types.ObjectId;


// actual code here
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect(uri, { useNewUrlParser: true });

app.post('/api', (req, res) => {
    // create the article object
    let postArt = {
        _id: new ObjectId,
        name: req.body.name,
        date: Date.now,
        desc: req.body.desc,
        steps: req.body.steps,
    };

    // creates a new Article (document)
    let newArticle = new Article(postArt);
    newArticle
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
})

app.listen(3000, () => {
    console.log('listening at port 3000');
});