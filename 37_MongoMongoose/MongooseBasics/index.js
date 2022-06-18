const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/movieApp', { useNewURLParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connection Open!');
    })
    .catch(err => {
        console('ERROR!');
        console.log(err);
    })

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
})

const Movie = mongoose.model('Movie', movieSchema);
const granTorino = new Movie({ title: 'Gran Torino', year: 2008, score: 8.7, rating: 'Good' })