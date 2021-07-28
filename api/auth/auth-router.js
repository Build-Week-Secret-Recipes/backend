const bcrypt = require('bcryptjs')
const router = require("express").Router();
const{restricted,checkusersnameExists,validateRoleName,only,} = require('./auth-middleware')
const {JWT_SECRET} = require('../auth/secrets/index.js')
const { default: jwtDecode } = require('jwt-decode');
const users = require('../auth/auth-model.js')
const jwt = require("jsonwebtoken")

//POST to /api/auth/register
router.post("/register", validateRoleName, (req,res,next) =>{
    let users = req.body
    const rounds = process.envBCRYPT_ROUNDS || 8;
    const hash = bcrypt.hashSync(users.password, rounds);
    users.password = hash
    users.add(users) 
    .then(users =>{
        res.status(201).json(users)
    })
     .catch(err => {
            console.log('ERR', err)
            res.status(500).json({ message: 'Registration failed' });
        });
})



router.post('/login', checkusersnameExists,(req,res,next) =>{
    let{usersname,password} = req.body;
    
    
    users.findBy({usersname})
    .then(([users]) =>{
        if(users && bcrypt.compareSync(password,users.password)){
            const token = makeToken(users)
            res.status(200).json({
                message:`Welcome back ${users.usersname}!`,
                token
            })
        }else{
            res.status(401).json({message:'Invalid Credentials'})
        }
    })
    .catch(err => {
            res.status(500).json({ message: 'Problem logging in' });
        });
})

function makeToken(users){
    const payload = {
        subject:users.users_id,
        usersname:users.usersname,
    }
    const options ={
        expiresIn:'1d'
    }
    return jwt.sign(payload,JWT_SECRET,options)
}
module.exports = router;