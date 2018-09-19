const express = require('express');
const logger = require('morgan');
const ejs = require('ejs')
const bodyParser = require('body-parser')
const db = require('./config/connection')
const app = express();
const views = require('./controllers/viewController')
const methodOverride = require('method-override')

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
app.use(methodOverride('_method'))
app.use(express.static(__dirname + "/public"));

//show the home page
app.get('/',(req, res)=>{
    res.render('index');
})




// Set Up Middleware for routes
app.use('/movies', movies)

//the /movies in red make an automatic /movies to all .uses in
//the movies.js because the movies in blue tells it to


// start express server
app.listen(3000, () => {

    console.log(`Listening on port ${3000}`);

})
