const db = require('../utils/database')
const { DataTypes } = require('sequelize')
const Users = require ('./users.models')
const Conversations = require ('./conversations.models')

const Message = db.define('message', {
    id : {
        primaryKey: true,
        type: DataTypes.UUID,
        allowNull: false,
        },

        //Lave Foranea  de userId
        userId:{
            type: DataTypes.UUID,
            allowNull: false,
            field:'user_id',
            references: {
                key:'id', 
                model:Users
            }
        },

        //Llave Foranea de conversationId
        conversationId:{
            type: DataTypes.UUID,
            allowNull: false,
            field:'conversation_id',
            references: {
                key:'id', 
                model:Conversations
            }
        },

        message:{
            type: DataTypes.STRING,
            allowNull: false,
        },

});

module.exports = Message