const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movies');

router.get('/movies', (req, res) => {
    // get all the movies
    Movie.find().then(movies => {
      res.render('movies', {moviesList: movies});
    });
  });

  module.exports = router;