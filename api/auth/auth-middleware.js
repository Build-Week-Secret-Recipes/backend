const {default: jwtDecode}= require('jwt-decode')
const jwt = require("jsonwebtoken")
const {JWT_SECRET} = require('../auth/secrets/index.js')
const users = require('../auth/auth-model.js')

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

const only = role_name => (req, res, next) => {
  if (req.decodedToken.role_name  === role_name) {
      next();
  } else {
      res.status(403).json({message: "users does not have correct permission"})
  }
}

const checkusersnameExists = async (req,res,next)=>{
    try {
        const rows = await users.findBy({usersname:req.body.usersname})
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

const validateRoleName = (req,res,next) =>{
    const {role_name} = req.body;
    if(role_name === undefined || role_name.trim() ===""){
        req.body.role_name="users"
        next()
    }else if(role_name.trim().length >32){
        res.status(422).json({
            "message":"Role cannot be longer than 32 characters"
        })
    }else{
        req.body.role_name = role_name.trim()
        next()
    }
}
module.exports = {
  restricted,
  checkusersnameExists,
  validateRoleName,
  only,
}