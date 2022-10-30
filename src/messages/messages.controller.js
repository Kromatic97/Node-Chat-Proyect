const Messages = require ('../models/message.models')
const uuid = require('uuid')
const Users = require('../models/users.models')
const Conversations = require('../models/conversations.models')


const getAllMessages = async () =>{
    const data = await Messages.findAll()
        include:[
            {
                model: Users,
                as: 'user',
                attributes: ['id', 'firstName', 'lastName', 'email']
            },

            {
                model:Conversations
            }
        ]
    return data
}

const getMessageById = async (id) =>{
    const data = await Messages.findOne({
        where:{
            id
        }
    })
    return data
}

const createMessage = async (data) => {
    const newMessage = await Messages.create({
        id:uuid.v4(),
        userId:data.userId,//este viene del token
        conversationId:data.conversationId,
        message:data.message
    })

    return newMessage
}

module.exports = {
    getAllMessages,
    getMessageById,
    createMessage
}