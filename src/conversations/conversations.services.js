const conversationsControllers = require ('./conversations.controller')

//Get toda la conversacion
const getAllConversations = (req, res) => {
    conversationsControllers.getAllConversations()
    .then((data) => {
        res.status(200).json(data)
    })

    .catch((err) => {
        res.status(400).json({message:err.message})
    })

}
//Get conversacion por Id
const getConversationById = (req, res) => {
    const id=req.params.id;

    conversationsControllers.getConversationById(id)

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

//Nueva Conversacion//
const postConversation = (req, res) => {
    const data = req.body;
    if(data.title && data.imageUrl && data.userId){
        conversationsControllers.createConversation(data)
        .then( response => {
            res.status(201).json(response)
        })
        .catch(err => {
            res.status(400).json({message:err.message})
        })
    }else{
        res.status(400).json({message:'Missin data'})
    }
};

//Edit Conversacion
const patchConversation = (req, res) => {
    const id = req.params.id
    const {title, imageUrl, userId} = req.body;

    conversationsControllers.editConversation(id, {title, imageUrl, userId})
    .then((response) => {

        if(response[0]){
            res.status(200).json({message:`Conversation whit id: ${id}, edited succesfully`}) 
         } else {
            res.status(400).json({message:error.message})
         }
        })
        .catch(error => {
            res.status(400).json({message:error.message})
        })
}
//Delete conversacion
const  deleteConversation = (req, res) => {
    const id = req.params.id
    conversationsControllers.deleteConversation(id)
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
    getAllConversations,
    getConversationById,
    postConversation,
    patchConversation,
    deleteConversation

}