const express = require('express');
const router = express.Router();

const views = require('../controllers/viewController')
const controller = require('../controllers/Controller')
const Movie = require('../models/movie')

// router.get('/', (req,res) => {
//     console.log(Movie.findAll())
//     res.render('movies.ejs')
// })
router.get('/', controller.index, views.showAll)

router.get('/add', (req, res) => {
    res.render('add_movie.ejs')
})

router.post('/add', (req, res) => {
    console.log(req.body.movie_title, req.body.where_to_watch)
    res.redirect('/movies')
    
})

module.exports = router