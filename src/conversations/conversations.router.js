const router = require('express').Router()

const conversationsControllers = require ('./conversations.services')

router.route('/') //? /conversations
.get(conversationsControllers.getAllConversations)
.post(conversationsControllers.postConversation)

router.get('/:id', conversationsControllers.getConversationById)
router.delete('/:id',conversationsControllers.deleteConversation)
router.patch('/:id', conversationsControllers.patchConversation)

module.exports = router