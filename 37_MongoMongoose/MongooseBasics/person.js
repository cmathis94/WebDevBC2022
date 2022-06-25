const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopApp', { useNewURLParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connection Open!');
    })
    .catch(err => {
        console('ERROR!');
        console.log(err);
        process.exit(1);
    });

const personSchema = new mongoose.Schema({
    first: String,
    last: String
})

personSchema.virtual('fullName').get(function () {
    return `${this.first} ${this.last}`
})

personSchema.pre('save', async function () {
    this.first = 'Yo';
    this.last = 'Mama';
    console.log('Saving...')
})
personSchema.post('save', async function () {
    console.log('Saved')
})

const Person = mongoose.model('Person', personSchema);