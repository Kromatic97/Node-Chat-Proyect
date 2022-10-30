const router = require('express').Router()
const passport = require('passport')
const messageServices = require ('./messages.services')
const adminValidate = require('../middlewares/role.middleware')
require('../middlewares/auth.middleware')(passport)




router.route('/') //? /messages
.get(messageServices.getAllMessages)
.post(
    passport.authenticate('jwt', {session:false}), 
    messageServices.createMessage
    )

// router.get('/:id', messageControllers.getMessageById)
// router.delete('/:id',messageControllers.deleteMessage)


module.exports = router