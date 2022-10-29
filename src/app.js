//Dependencias

const express = require ('express')
const db =  require ('./utils/database')
//FILES
const config = require ('./config')

//ROUTES
const userRouter = require ('./users/users.router')
const authRouter = require('./auth/auth.router')
const conversationRouter = require('./conversations/conversations.router')
const initModels = require('./models/initModels')


//Initial config
const app = express()

app.use(express.json())

db.authenticate()
.then(() => {
    console.log('Database Aunthenticated')
})
.catch(err => {
    console.log(err)
})


db.sync()
.then(() => {
    console.log('Database Synced')
})
.catch(err => {
    console.log(err)
})
 initModels()


app.get('/', (req, res) => {
    res.status(200).json ({
        message:'OK!',
        users:`localhost:${config.port}/api/v1/users`
    })
} )


//!manejo de rutas
app.use('/api/v1/users', userRouter)
app.use('/api/v1/auth', authRouter)

app.use('/api/v1/conversations', conversationRouter)



app.listen(config.port, () => {
    console.log(`Server started at port ${config.port}`)
})


