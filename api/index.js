
//stuff that I need to import
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// stuff for mongoose|mongo
const creds = require('./creds/mongodb/creds.json')
const uri = `mongodb+srv://12jikan:${creds.password}@cluster0-nxdlq.mongodb.net/foodShare?retryWrites=true`;

// code here
const app = express();

mongoose.connect(uri, { useNewUrlParser: true })

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const userModel = mongoose.model("user", {
    firstName: String,
    lastName: String,
    userName: String,
});

app.post("/api", async (req, res, next) => {
    let person = new userModel(req.body);
    let result = await user.save();
    res.send(result);
}).catch(err => console.error(err))

app.listen(3000, () => {
    console.log('listening at port 3000');
});