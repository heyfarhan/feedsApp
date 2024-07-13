const express = require('express')



const signup = require('../Controllers/signup.controller')

const router = express.Router()

router.get('/signup', signup)

router.get('/login', (req, res) => {
    res.json({ msg: "login successfull" })
})

module.exports = router
