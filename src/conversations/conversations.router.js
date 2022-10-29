const router = require('express').Router()

const conversationsControllers = require ('./conversations.services')

router.route('/') //? /conversations
.get()
.post()

router.get('/:id')
router.delete('/:id')
router.patch('/:id')