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
    return db.none(`
      INSERT INTO movies (movietitle)
    `, movie);
  },

  findById(id) {
      return db.one(`
      SELECT * FROM movies
      WHERE id = $1`,id)
  }
// $ is just the way pg promise is used
};

//import model into controller