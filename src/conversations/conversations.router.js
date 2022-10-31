const router = require('express').Router()

const conversationServices = require('./conversations.services')
const passport = require('passport')
const adminValidate = require('../middlewares/role.middleware')

require('../middlewares/auth.middleware')(passport)

router.route('/') //? /conversations
.get(passport.authenticate('jwt', {session:false}), 
conversationServices.getAllConversations
)

.post(
    passport.authenticate('jwt', {session:false}), 
    conversationServices.postConversation
    )


router.route('/:id')
    .get(conversationServices.getConversationById)
    
    .patch(
        passport.authenticate('jwt', {session: false}),
        // adminValidate,
        conversationServices.patchConversation
    )
    .delete(
        passport.authenticate('jwt', {session: false}),
        // adminValidate,
        conversationServices.deleteConversation
    )

router

module.exports = router