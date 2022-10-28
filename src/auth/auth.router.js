//? Auth va a contener las rutas de autorizacoin y autenticacion
//Login
//Register
//Recovery Password
//Verify User

const router = require('express').Router()
const authServices = require ('./auth.services')
const { registerUser } = require('../users/users.services')
 
router.post('/register', registerUser)
router.post('/login', authServices.login)
module.exports = router

