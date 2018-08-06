const db = require('../config/connection');

module.exports = {
  index(req, res, next) {
    // db.findAll()
    //   .then((movies) => {
    //     res.locals.movies = movies;
    //     // res.json(movies)
    //     next();
    //   })
    //   .catch((err) => {
    //     next(err);
    //   });
    next()
  },


};