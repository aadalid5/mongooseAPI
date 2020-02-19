const router = require("express").Router();
const controller = require("../controllers/movie.controller")

//test Router endpoint
router.route('/test').get((req,res)=>res.json({message:"Router working"}))

//HTTP METHODS
router.route('/movies')
    .get(controller.read)
    .post(controller.create)

router.route('/movies/:movieID')
    .get(controller.view)
    .put(controller.update)
    .delete(controller.remove);


//(prueba-> varios parametros en un request)
router.route('/movies/:movieID/:year')
    .get(controller.viewparams);


module.exports = router;