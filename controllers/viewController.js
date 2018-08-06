module.exports = {
    showAll(req, res) {
    console.log(req,res)
      res.render('movies.ejs', {
        data: res.locals.movies
      })
    }
  };