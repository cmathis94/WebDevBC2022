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
        min: [0, 'Price must be positive.']
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
    },
    size: {
        type: String,
        enum: ['S', 'M', 'L']
    }

})

productSchema.methods.greet = function () {
    console.log('hi')
    console.log(`- from ${this.name}`)
}

productSchema.methods.toggleOnSale = function () {
    this.onSale = !this.onSale;
    return this.save();
}

productSchema.methods.addCategory = function (newDog) {
    this.categories.push(newDog);
    return this.save();
}

productSchema.statics.fireSale = function () {
    return this.updateMany({}, { onSale: true, price: 0 })
}

const Product = mongoose.model('Product', productSchema);

const findProdcut = async () => {
    const foundProduct = await Product.findOne({ name: 'Moutain Bike' })
    console.log(foundProduct)
    await foundProduct.toggleOnSale();
    console.log(foundProduct)
    await foundProduct.addCategory('Outdoors')
    console.log(foundProduct)
}

Product.fireSale().then(res => console.log(res));

/* findProdcut(); */


/* const bike = new Product({ name: 'Cycling Jersey', price: 20.00, categories: ['Cycling', 'Safety'], size: 'M' })
bike.save()
    .then(data => {
        console.log('It worked!');
        console.log(data);
    })
    .catch(err => {
        console.log('ERROR!');
        console.log(err);
    }) */

/* Product.findOneAndUpdate({ name: 'Tire Pump' }, { price: -10.99 }, { new: true, runValidators: true })
    .then(data => {
        console.log('It worked!');
        console.log(data);
    })
    .catch(err => {
        console.log('ERROR!');
        console.log(err);
    }) */