module.exports = {
    showAll(req, res) {
        if(res.locals.movies) {
            res.render('movies.ejs', {
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