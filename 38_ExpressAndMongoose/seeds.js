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

const seedsArr = [
    {
        name: 'Apples',
        price: 0.50,
        category: 'fruit'
    },
    {
        name: 'Celery',
        price: 1.50,
        category: 'vegetable'
    },
    {
        name: 'Chocolate Milk',
        price: 2.69,
        category: 'dairy'
    }
]

Product.insertMany(seedsArr)
    .then(res => {
        console.log(res)
    })
    .catch(e => {
        console.log(e)
    })

/* const p = new Product({
    name: 'Ruby Grapefruit',
    price: 1.99,
    category: 'fruit'
})

p.save()
    .then(p => {
        console.log(p)
    })
    .catch(e => {
        console.log(e)
    }) */