const express = require('express');
const router = express.Router();
const pgPromise = require('pg-promise')
const db = require('../config/connection')
const views = require('../controllers/viewController')
const controller = require('../controllers/Controller')
// const Movie = require('../models/movie')



const redirectUserToList = (req, res) => {res.redirect('/movies')};



router.get('/', controller.index, views.showAll)
router.get('/:id', controller.findOne, views.showOne)
router.get('/add', (req, res) => {
    res.render('add_movie.ejs')
})



router.post('/add', controller.addOne, views.addMovie)

router.delete('/:id', controller.destroy)

// 2) it goes to the controller.addOne which then goes to controller.js
//5) then it goes to the views.addMovie

module.exports = router

// thanks to the /movies in server.js all the / here have
//movies/   e.g  movies/add, movies/:id, movies/ , movies/add

//im missing delete and put