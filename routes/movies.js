const express = require('express');
const router = express.Router();
const pgPromise = require('pg-promise')
const db = require('../config/connection')
const views = require('../controllers/viewController')
const controller = require('../controllers/Controller')
// const Movie = require('../models/movie')

// router.get('/', (req,res) => {
//     console.log(Movie.findAll())
//     res.render('movies.ejs')
// })

//get slash id

router.get('/add', (req, res) => {
    res.render('add_movie.ejs')
})
router.get('/:id', controller.findOne, views.showOne)

router.get('/', controller.index, views.showAll)


router.post('/add', controller.addOne, views.addMovie)

module.exports = router

//im missing delete and put