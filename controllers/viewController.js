module.exports = {
    showAll(req, res) {
        console.log('this is res.locals.movies', res.locals.movies);
        if (res.locals.movies) {
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
    //6 it finishes here at the add Movie
    showOne(req, res) {
        res.render('show_movie')
    },

    editMovie(req, res) {
            res.render('edit_movie', {
                movie: res.locals.movie
            })
    },

    redirectHome(req, res) {
        res.redirect('/movies')
    }
};
//thats where to go
// works with ejs

//renders the view
