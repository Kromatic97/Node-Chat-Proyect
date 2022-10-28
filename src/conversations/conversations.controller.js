const Conversations = require ('../models/conversations.models')
const uuid = require ('uuid')

const getAllConversations = async () =>{
    const data = await Conversations.findAll()
    return data
}

const getConversationById = async (id) =>{
    const data = await Conversations.findOne({
        where:{
            id
        }
    })
    return data
}

const createConversation = async (data) => {
    const newConversation= await Conversations.create({
        id:uuid.v4(),
        title:data.title,
        imageUrl:data.imageUrl,
        userId:data.userId
    })

    return newConversation
}


const editConversation = async (id, data) => {
    const response = await Conversations.update(data, {
        where: {
            id: id
        },
    })
    return response
}

const deleteConversation = async (id) => {
    const data = await Conversations.destroy({
        where: {
            id:id
        }
    })
    return data
}



module.exports = {
    getAllConversations,
    getConversationById,
    createConversation,
    editConversation,
    deleteConversation
}
