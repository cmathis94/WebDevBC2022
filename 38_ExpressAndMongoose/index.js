const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

const Product = require('./models/product');

mongoose.connect('mongodb://localhost:27017/farmStand', { useNewURLParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Mongo: Connected')
    })
    .catch(err => {
        console.log('Mongo: Error', err);
        process.exit(1);
    })

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/dog', (req, res) => {
    res.send('Bark bark. I am dog')
})

app.listen(3000, () => {
    console.log('Port: 3000');
})