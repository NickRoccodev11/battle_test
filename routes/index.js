const router = require('express').Router()

//token verification will go here

router.use('/user', require('./user'))

module.exports= router;