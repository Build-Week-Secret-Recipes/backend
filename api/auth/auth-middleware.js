const {default: jwtDecode}= require('jwt-decode')
const jwt = require("jsonwebtoken")
const {JWT_SECRET} = require('../auth/secrets/index.js')
const Users = require('../auth/auth-model.js')

const restricted = (req,res,next) =>{
    const token = req.headers.authorization;
    if(!token){
        res.status(401).json({
            message:"Token required"
        })
    }else{
        jwt.verify(token, JWT_SECRET,(err,decoded) =>{
            if(err){
                res.status(401).json({
                    message:"Token invalid"
                })
            }else{
                req.decodedToken =decoded
                next()
            }
        })
    }
}



const checkusernameExists = async (req,res,next)=>{
    try {
        const rows = await Users.findBy({username:req.body.username})
        if(!rows.length){
            res.status(401).json({message:"Invalid Credentials"})
        }else{
            req.usersData=rows[0]
            next()
        }
    } catch (err) {
        next(err)
        
    }
}
async function checkIdUsers(req, res, next) {
  try{
    const users = await Users.findById(req.params.id)
    if(users){
      req.users = users
      next()
    }else{
      res.status(404).json("User not found")
    }
  }catch(err){
    next(err)
  }
}

module.exports = {
  restricted,
  checkusernameExists,
  checkIdUsers
}