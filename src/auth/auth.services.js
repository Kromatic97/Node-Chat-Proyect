
const jwt = require ('JsonWebToken');
const { jwtSecret } = require('../config');
const {loginUser} = require ('./auth.controller')

const login = (req, res) => {
    const {email, password} = req.body;
    // if(!email || !password) return res.status(400).json({message:'Mising Data'})
    if (email && password){
        loginUser(email, password)
        .then(response => {
            if(response){
                const token = jwt.sign({
                    id:response.id,
                    email:response.email,
                    role:response.role
                    
                },jwtSecret)
                res.status(200).json({message:'Correct Credential', token})
                
            }else{
                res.status(401).json({message:'Invalid Credential'})
            }
        })
        .catch(error => {
        })
    } else {
        res.status(400).json({message:'error.message'})
    }

}

module.exports = {
    login
}