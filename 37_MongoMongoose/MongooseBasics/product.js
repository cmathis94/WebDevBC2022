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
        required: true,
        maxLength: 20
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    onSale: {
        type: Boolean,
        default: false
    },
    categories: [String],
    qty: {
        online: {
            type: Number,
            default: 0
        },
        inStore: {
            type: Number,
            default: 0
        }
    }

})

const Product = mongoose.model('Product', productSchema);

/* const bike = new Product({ name: 'Tire Pump', price: 20.00, categories: ['Cycling', 'Safety'] })
bike.save()
    .then(data => {
        console.log('It worked!');
        console.log(data);
    })
    .catch(err => {
        console.log('ERROR!');
        console.log(err);
    }) */

Product.findOneAndUpdate({ name: 'Tire Pump' }, { price: -10.99 }, { new: true, runValidators: true })
    .then(data => {
        console.log('It worked!');
        console.log(data);
    })
    .catch(err => {
        console.log('ERROR!');
        console.log(err);
    })