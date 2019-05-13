//stuff that I need to import
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// models go here

// routers go here
const recipesRouter = require('./routers/recipes');

// declarative stuff
const app = express();

// actual code here
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// mongoose.connect(uri, { useNewUrlParser: true });

app.use('/api', recipesRouter);


app.listen(3000, () => {
    console.log('listening at port 3000');
});