//** */
const { getUserByEmail } = require ("../users/users.controllers")
const { comparePassword } = require ('../utils/crypto')

const loginUser = async (email, password) => {
    //Este controlador tiene 2 posibles respuestas//
    //1 credenciales validas y retorna usuario 
    //2 credenciales invlidas retorna false

    try {
        const user = await getUserByEmail(email)
        const verifyPassword = comparePassword(password, user.password)
        if(verifyPassword){
            return user
        }
        return false

    } catch (err) {
        return false
    }

}

// loginUser('rogi@gmail.com', 'root')
//     .then(response => console.log(response))
//     .catch(err => console.log(err))

module.exports = {
    loginUser
}