// connections
const db = require('../config/connection');

//  SQL queries to the database
module.exports = {
  // Insert SQL Queries for database
  findAll() {
    return db.many(`
   SELECT * FROM movies
   `);
  },

  saveMovie(movie) {
    movie.date_created = '08/12/18';
    console.log('movieeee', movie)
    return db.one(`
      INSERT INTO movies(moviename, platform) VALUES($/moviename/, $/platform/) RETURNING *
    `, movie);
  },
  // 4) the req.body from controller.js is now coming here

  findById(id) {
      return db.one(`
      SELECT * FROM movies
      WHERE id = $1`,id)
  },
// $ is just the way pg promise is used

  destroy(id){
    return db.none(`DELETE FROM movies WHERE id = $1`, id);
  }
};

//import model into controller