const config = require('./dbConfig');
const pgp = require('pg-promise')();
// pg promise is used to interact with our database with javascript
//db config is ceonntting the schema and database


const db = pgp(config);
module.exports = db
// this is our window to the database

// this gets connected to movie.js