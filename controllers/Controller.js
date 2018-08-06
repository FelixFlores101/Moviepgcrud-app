const db = require('../controllers/viewController');

module.exports = {
  index(req, res, next) {
    db.showAll()
      .then((movies) => {
        res.locals.movies = movies;
        // res.json(movies)
        next(req, res);
      })
      .catch((err) => {
        next(err);
      });
  },

};