const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product');

const app = express();
const path = require('path');

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

app.get('/products', async (req, res) => {
    const products = await Product.find({})
    res.render('products/index.ejs', { products })
})

app.listen(3000, () => {
    console.log('Port: 3000');
})