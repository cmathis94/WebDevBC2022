const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopApp', { useNewURLParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connection Open!');
    })
    .catch(err => {
        console('ERROR!');
        console.log(err);
    })

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
})

const Product = mongoos.model('Product', productSchema);

const bike = new Product({ name: 'Mountain Bike', price: 599 })
bike.save()
    .then(data => {
        console.log('It worked!');
        console.log(data);
    })
    .catch(err => {
        console.log('ERROR!');
        console.log(err.errors.name.properties.message);
    })