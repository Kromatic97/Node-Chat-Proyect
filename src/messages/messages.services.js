const messageControllers = require ('./messages.controller')

//Get toda los mensajes
const getAllMessages = (req, res) => {
    messageControllers.getAllMessages()
    .then((data) => {
        res.status(200).json(data)
    })

    .catch((err) => {
        res.status(400).json({message:err.message})
    })

}
//Get message por Id
const getMessageById = (req, res) => {
    const id=req.params.id;

    messageControllers.getMessageById(id)

    .then(data => {
        if(data){
            res.status(200).json(data)
        }else{
            res.status(404).json({message:'Invalid ID'})
        }
    })
    .catch(err => {
        res.status(400).json({message:err})
    })
}

//New message// //!VER EL TEMA DE USER AUTENTICATE
const createMessage = (req, res) => {
    const userId= req.user.id
    const {conversationId, message} = req.body;
    if(conversationId, message){
        messageControllers.createMessage({userId, conversationId, message})
        .then( response => {
            res.status(201).json(response)
        })
        .catch(err => {
            res.status(400).json({message:err.message})
        })
    }else{
        res.status(400).json({message:'Missin data', fields:{
            userId:'uuid',
            message:'string',
            conversationId:'uuid'
        }})
    }
};


//Delete message
const deleteMessage = (req, res) => {
    const id = req.params.id
    messageControllers.deleteMessage(id)
    .then((response) => {
        if(response){
            res.status(204).json(response)
        }else {
            res.status(400).json({message: 'Invalid ID'})
        }
    })
    .catch(err => {
        res.status(400).json(err)
    })
}

module.exports = {
    getAllMessages,
    getMessageById,
    createMessage,
    deleteMessage

}