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

};