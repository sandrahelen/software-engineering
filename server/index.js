const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const kollektivRoute = require('./routes/kollektiv');
const studentbyRoute = require('./routes/studentby');
const userRoute = require('./routes/user');
const path = require('path');
require('dotenv').config();

const app = express();

const port = process.env.PORT || 5000;


//TODO Add mongoose link in .env file
mongoose.connect('mongodb+srv://fredrik:12345@pu48-e21uc.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log(`Database connected successfully`))
    .catch(err => console.log(err));

//since mongoose promise is depreciated, we overide it with node's promise
mongoose.Promise = global.Promise;

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.json());

app.use('/api/kollektiv', kollektivRoute);
app.use('/api/studentby', studentbyRoute);
app.use('/api/user', userRoute);

app.use((err, req, res, next) => {
    console.log(err);
    next();
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});