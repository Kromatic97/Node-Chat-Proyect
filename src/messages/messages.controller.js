const Messages = require ('../models/message.models')

const getAllMessages = async () =>{
    const data = await Messages.findAll()
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
        userId:data.userId,
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