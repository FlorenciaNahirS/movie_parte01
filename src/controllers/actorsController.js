const db = require('../database/models'); 

module.exports = {
    list : (req,res ) => {
        db.Actor.findAll({
            order : [['last_name']]
        })
            .then((actors) => {
                //return res.send(actors)
                return res.render('actorsList',{
                    actors
                })
            })
            .catch((errors => console.log(errors)))
    },
    detail : (req,res) => {
        db.Actor.findByPk(req.params.id)
            .then((actor) => {
                //res.send(Actor)
                return res.render('actorsDetail',{
                    actor
                })
            })
            .catch((errors) => console.log(errors))

    }
}