const config = require('./dbConfig');
const pgp = require('pg-promise')();
// pg promise is used to interact with our database with javascript

const db = pgp(config);
module.exports = db
// this is our window to the database