const router = require('express').Router()
const passport = require('passport')

const messageServices = require ('./messages.services')
require('../middlewares/auth.middlewares')(passport)



router.route('/') //? /messages
// .get()
.post(
    passport.authenticate('jwt', {session:false}), 
    messageServices.createMessage
    )

// router.get('/:id', messageControllers.getMessageById)
// router.delete('/:id',messageControllers.deleteMessage)


module.exports = router