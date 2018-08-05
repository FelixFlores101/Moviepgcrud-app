const express = require('express');
const logger = require('morgan');
const ejs = require('ejs')
const bodyParser = require('body-parser')
const db = require('./config/connection')
const app = express();

//  CONNECT TO DB 
db.connect({direct: true})

//set view engine
app.set('view engine', ejs)

app.use(bodyParser.urlencoded({extended: false}))
app.use(logger('dev'));

//routes
app.get('/', (req, res) => {
    res.send('Hello world!');
    
});
app.get('/movies', (req, res) => {
    res.render('movies.ejs')
});

app.get('/movies/add', (req, res) => {
    res.render('add_movie.ejs')
})

app.post('/movies/add', (req, res) => {
    console.log(req.body.movie_title, req.body.where_to_watch)
    res.redirect('/movies')
    
})

// start express server
app.listen(3000, () => {

    console.log(`Listening on port ${3000}`);

})