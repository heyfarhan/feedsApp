const express = require('express')



const signup = require('../Controllers/signup.controller')
const login = require('../Controllers/login.controller')

const router = express.Router()

router.get('/signup', signup)

router.get('/login', login)

module.exports = router
