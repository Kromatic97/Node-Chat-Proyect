const Users = require('./users.models')
const Message = require ('./message.models')
const Conversations = require('./conversations.models')
const Participants = require ('./participants.models')


const initModels = () => {
}
//**Relacion uno a muchos */

//Relacion message- users - conversation//
Message.belongsTo(Users)
Users.hasMany(Message)

Message.belongsTo(Conversations)
Conversations.hasMany(Message)

//**Relacion uno a muchos */
//Relacion participants- users - conversation//
Participants.belongsTo(Users)
Users.hasMany(Message)

Participants.belongsTo(Conversations)
Conversations.hasMany(Participants)

//**Relacion uno a muchos */
//Relacion users-conversation
Conversations.belongsTo(Users)
Users.hasMany(Conversations)





module.exports = initModels