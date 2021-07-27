const bcrypt = require('bcryptjs')
const router = require("express").Router();
const{restricted,checkUsernameExists,validateRoleName,only,} = require('./auth-middleware')
const {JWT_SECRET} = require('../auth/secrets/index.js')
const { default: jwtDecode } = require('jwt-decode');
const Users = require('../users/users-model.js')
const jwt = require("jsonwebtoken")

router.post("/register", validateRoleName, (req,res,next) =>{
    let user = req.body
    const rounds = process.envBCRYPT_ROUNDS || 8;
    const hash = bcrypt.hashSync(user.password, rounds);
    user.password = hash
    Users.add(user)
    .then(user =>{
        res.status(201).json(user)
    })
    .catch(next)
})
router.post('/login', checkUsernameExists,(req,res,next) =>{
    let{username,password} = req.body;

    Users.findBy({username})
    .then(([user]) =>{
        if(user && bcrypt.compareSync(password,user.password)){
            const token = makeToken(user)
            res.status(200).json({
                message:`Welcome back ${user.username}!`,
                token
            })
        }else{
            res.status(401).json({message:'Invalid Credentials'})
        }
    })
    .catch(next)
})

function makeToken(user){
    const payload = {
        subject:user.user_id,
        username:user.username,
        role_name:user.role_name
    }
    const options ={
        expiresIn:'1d'
    }
    return jwt.sign(payload,JWT_SECRET,options)
}
module.exports = router;