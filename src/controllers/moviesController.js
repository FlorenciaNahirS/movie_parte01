const db = require('../database/models');
const { Op } = require("sequelize");

module.exports = {
    list : (req,res) => {
        db.Movie.findAll()
            .then((movies) => {
                //res.send(movies);
                return res.render('moviesList', {
                    movies
                })
            })
            .catch((errors) => console.log(errors))
    },
    detail : (req,res) => {
        db.Movie.findByPk(req.params.id)
            .then((movie) => {
                //res.send(movie)
                return res.render('moviesDetail',{
                    movie
                })
            })
            .catch((errors) => console.log(errors))

    },
    new : (req,res) => {
        db.Movie.findAll({
            order: [
                ['release_date', 'DESC'] 
            ]
        })
            .then((movies) => {
                //return res.send(movies)
                return res.render('newestMovies', {
                    movies
                })
            })
            .catch((errors) => console.log(errors))
    },
    recomended : (req, res) =>{
        db.Movie.findAll({
            where : {
                'rating' : {
                    [Op.gte] : 9
                }
            },
            order : [['release_date', 'DESC']],
            limit: 5
        })
            .then((movies) => {
                //return res.send(movies)
                return res.render('recommendedMovies',{
                    movies
                })
            })
            .catch((errors) => console.log(errors))
    }
}