const router = require('express').Router();
const Recipes = require('./recipes-model.js')



async function checkId(req, res, next) {
  try{
    const recipe = await Recipes.findById(req.params.id)
    if(recipe){
      req.recipe = recipe
      next()
    }else{
      res.status(404).json("Recipe not found")
    }
  }catch(err){
    next(err)
  }
}

module.exports={
    checkId
}