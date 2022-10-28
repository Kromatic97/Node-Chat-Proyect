const db = require('../utils/database')
const { DataTypes } = require ('sequelize')
const Users = require ('./users.models')


const Conversations = db.define('conversations', {
    id : {
        primaryKey: true,
        type: DataTypes.UUID,
        allowNull: false,
        },

    title:{
        type: DataTypes.STRING,
        allowNull: false,
        },

        imageUrl:{
            type: DataTypes.STRING,
            field:'image_url'
        },

        //clave foranea de USERS
        userId:{
            type: DataTypes.UUID,
            allowNull: false,
            field:'user_id',
            references: {
                key:'id', 
                model:Users
            }
        },
});

module.exports = Conversations