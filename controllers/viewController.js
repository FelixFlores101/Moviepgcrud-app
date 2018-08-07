module.exports = {
    showAll(req, res) {
        console.log('this is res.locals.movies', res.locals.movies);
        if(res.locals.movies) {
            res.render('movies', {
                data: res.locals.movies
            })
        } else {
            res.redirect('/movies/add')
        }
    },
    addMovie(req, res) {
        res.redirect('/movies')
    },
    showOne(req, res) {
        res.render('show_movie')
    }
};
//thats where to go
//