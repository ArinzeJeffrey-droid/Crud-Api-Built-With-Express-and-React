const router = require('express').Router();
let Excersise = require("../models/excercise.model")



router.route('/').get((req, res) => {
    Excersise.find()
        .then(excersises => res.json(excersises))
        .catch(err => res.status(400).json(`Error: ${err}`))
})

router.route('/add').post((req, res) => {
    const username = req.body.username
    const description = req.body.description
    const duration = Number(req.body.duration)
    const date = Date.parse(req.body.date)

    const newExcersie = new Excersise({
        username,
        description,
        duration,
        date
    })

    newExcersie.save()
        .then(() => res.json("Excersise Added!"))
        .catch(err => res.status(400).json(`Error: ${err}`))
})


router.route('/:id').get((req, res) => {
    Excersise.findById(req.params.id)
        .then(excersise => res.json(excersise))
        .catch(err => res.status(400).json(`Error: ${err}`))
})

router.route('/delete/:id').delete((req, res) => {
    Excersise.findByIdAndDelete(req.params.id)
        .then(() => res.json("Exercise Deleted!"))
        .catch(err => res.status(400).json(`Error: ${err}`))
})




router.route('/update/:id').post((req, res) => {
    Excersise.findById(req.params.id)
        .then(exercise => {
            exercise.username = req.body.username
            exercise.description = req.body.description
            exercise.duration = req.body.duration
            exercise.date = Date.parse(req.body.date)


            exercise.save()
                .then(() => res.json("Exercise Updated"))
                .catch(err => res.status(400).json(`Error: ${err}`))
        })
        .catch(err => res.status(400).json(`Error: ${err}`))
})

module.exports = router