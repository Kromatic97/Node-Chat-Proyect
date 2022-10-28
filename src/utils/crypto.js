const bcrypt = require('bcrypt')

const hashPassword = (plainPassword) => {
    return bcrypt.hashSync(plainPassword, 10)   
}


//compara si la contrasenha root es = 
//$2b$10$1WGHYCr4Qr0M1ueV8D0Ty.fnQCVFpGKkgwPqIKP.otxnG6aymeioq

const comparePassword = (plainPassword, hashedPassword) => {
    return bcrypt.compareSync(plainPassword, hashedPassword)
}


//console.log(comparePassword('root', '$2b$10$gtek9sFVmbv0SOcZtIZFeuLR9NzDPF7w7tGhbGwaMt2OC4sGtuoDy'))

module.exports = {
    hashPassword,
    comparePassword
}