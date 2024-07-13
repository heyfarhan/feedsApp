const express = require('express')



const signup = require('../Controllers/signup.controller')
const login = require('../Controllers/login.controller')

const router = express.Router()

router.post('/signup', signup)

router.post('/login', login)



module.exports = router
