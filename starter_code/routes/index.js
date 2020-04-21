const express = require('express');
const router  = express.Router();
const mongoose     = require('mongoose');
const Movie = require('../models/Movies');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res) => {
  // get all the movies
    mongoose.connect('mongodb://localhost/starter_code', {
      useNewUrlParser: true
    }).then(() => {
      Movie.find({}, (error, movies) => {
      console.log(movies, error);
      res.render('movies', {moviesList: movies}); 
      });
  });
});

router.get('/movieDetails/:movieId', (req, res) => {
  const movieId = req.params.movieId;
  Movie.finById(movieId).then(movie => {
    res.render('movieDetails', {movie: movie});
  });
});

module.exports = router;