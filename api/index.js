
//stuff that I need to import
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// stuff for mongoose|mongo
const creds = require('./creds/mongodb/creds.json')
const dbName = "foodShare";
const uri = `mongodb+srv://12jikan:${creds.password}@cluster0-nxdlq.mongodb.net/${dbName}?retryWrites=true`;

// code here
const app = express();
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

// create Schemas here
const personSchema = new Schema({
    _id: ObjectId,
    firstname: String,
    lastname: String,
});

const person = mongoose.model('Person', personSchema);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect(uri, { useNewUrlParser: true });


app.post('/api', (req, res) => {
    console.log(req.body);
    res.send(req.body);
})

app.listen(3000, () => {
    console.log('listening at port 3000');
});