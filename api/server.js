const express = require("express");
const helmet = require("helmet");

const authRouter = require('./auth/auth-router.js')
const usersRouter = require('./users/users-router.js')
const recipeRouter = require('./recipes/recipes-router.js')

const server = express();

server.use(helmet());
server.use(express.json());

server.get('/', (req, res) => {
  res.send(`<h2>api is up! Start by running /api/recipes to get recipes to get recipes!
  https://github.com/Build-Week-Secret-Recipes/backend</h2>`);
});

server.use('/api/auth',authRouter)
server.use('/api/users',usersRouter)
server.use('/api/recipes',recipeRouter)


server.use((err, req, res, next) => { // eslint-disable-line
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  });
});

module.exports = server;
