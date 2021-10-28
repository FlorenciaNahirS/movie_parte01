const db = require('../database/models'); 

module.exports = {
    list : (req,res ) => {
        db.Genre.findAll({
            order : [['name']]
        })
            .then((genres) => {
                //return res.send(genres)
                return res.render('genresList',{
                    genres
                })
            })
            .catch((errors => console.log(errors)))
    },
    detail : (req,res) => {
        db.Genre.findByPk(req.params.id)
            .then((genre) => {
                //res.send(genre)
                return res.render('genresDetail',{
                    genre
                })
            })
            .catch((errors) => console.log(errors))

    }
}