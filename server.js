const express = require('express');
const logger = require('morgan');
const ejs = require('ejs')
const bodyParser = require('body-parser')
const db = require('./config/connection')
const app = express();
const views = require('./controllers/viewController')

const controller = require('./controllers/Controller')

//  Get Models
const Movie = require('./models/movie')

//  Routes
const movies = require('./routes/movies')

//set view engine
app.set('view engine', 'ejs')

//  Set Static Assets For Front End Js And Css Files
app.use(express.static('./public'))

//  Setup middleware configurations
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(logger('dev'));

// Set Up Middleware for routes
app.use('/movies', movies)


// start express server
app.listen(3000, () => {

    console.log(`Listening on port ${3000}`);

})