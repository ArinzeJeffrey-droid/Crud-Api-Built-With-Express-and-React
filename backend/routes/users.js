const router = require("express").Router()
let User = require("../models/user.model")


router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json(`Error: ${err}`))
})

router.route('/add').post((req, res) => {
    const username = req.body.username
    const newUser = new User({ username })
    newUser.save()
        .then(() => res.json("User Added!"))
        .catch(err => res.status(400).json(`Error: ${err}`))
})

router.route('/delete/:id').delete((req, res) => {
    const user = User.findById(req.params.id)
    User.deleteOne(user).then(() => res.json("User Deleted")).catch(err => res.status(400).json(`Error: ${err}`))
})


module.exports = router