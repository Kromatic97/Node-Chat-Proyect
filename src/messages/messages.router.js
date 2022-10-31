const router = require('express').Router()
const passport = require('passport')
const messageServices = require ('./messages.services')
const adminValidate = require('../middlewares/role.middleware')
require('../middlewares/auth.middleware')(passport)




router.route('/') //? /messages
.get(passport.authenticate('jwt', {session:false}), 
messageServices.getAllMessages
)

.post(
    passport.authenticate('jwt', {session:false}), 
    messageServices.createMessage
    )


router.route('/:id')
.get(
    passport.authenticate('jwt', {session: false}),
    // adminValidate,
    messageServices.getMessageById
)
    .delete(
        passport.authenticate('jwt', {session: false}),
        // adminValidate,
        messageServices.deleteMessage
    )


module.exports = router