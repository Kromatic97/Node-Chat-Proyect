//revisa el tokens del usuario//

const adminValidate = (req, res, next) => {
    const role = req.user.role

    if(role === 'admin'){
        next()
    }else {
        res.status(401).json({message: 'Access Denied!'})
    }
}

// const teacherValidate = (req, res, next) => {
//     const role = req.user.role

//     if(role === 'teacher'){
//         next()
//     }else {
//         res.status(401).json({message: 'Access Denied!'})
//     }
// }



module.exports = adminValidate