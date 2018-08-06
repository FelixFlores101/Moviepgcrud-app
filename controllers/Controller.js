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
    // validation
    Movie.save(req.body.movie_title)
      .then((newMovie) => {
        res.locals.newMovie= newMovie;
        next();
      })
      .catch(e => next(e));
  },

  findOne(req, res, next) {
      Movie.findById(req.params.id)
      .then((movie) => {
          res.locals.movie = movie;
          next();
      })
      .catch(next);
  },

}
// findOne goes here showONe goes in the viewcontroller