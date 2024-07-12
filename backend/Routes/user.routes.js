const express = require('express')

const router = express.Router()

router.get('/signup', (req, res) => {
    res.json({ msg: "signup successfull" })
})

router.get('/login', (req, res) => {
    res.json({ msg: "login successfull" })
})

module.exports = router
