const db = require('../controllers/viewController');

module.exports = {
  index(req, res, next) {
    db.showAll(req, res)
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
    // TODO: make this method
    db.save(req.body.movie_title)
      .then((newMovie) => {
        res.locals.newMovie= newMovie;
        next();
      })
      .catch(e => next(e));
  }
};