const Movie = require('../models/movie');

module.exports = {
  index(req, res, next) {
    Movie.findAll(req, res)
      .then((movies) => {
        res.locals.movies = movies
        // res.json(movies)
        next();
      })
      .catch((err) => {
        next(err);
      });
  },

  addOne(req, res, next) {
    console.log('got a post request')
    // 3) add one here 

    // validation
    Movie.saveMovie(req.body)
    .then((data) => {
        return next();
      })
      .catch(e => next(e));
      //then it goes to models movie.js
  },

  findOne(req, res, next) {
      Movie.findById(req.params.id)
      .then((movie) => {
          res.locals.movie = movie;
          next();
      })
      .catch(next);
  },

  destroy(req, res, next) {
    
    Movie.destroy(req.params.id)
    .then( () => { 
      console.log(req.params.id, "delete movie")
      res.redirect('/movies')
      next();
    })

    .catch(err => {
      next(err);
    })
  }

}
// findOne goes here showONe goes in the viewcontroller

// figure out how to do the save
