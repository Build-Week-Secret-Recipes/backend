const express = require("express");
const helmet = require("helmet");

const authRouter = require('./auth/auth-router.js')
const usersRouter = require('./users/users-router.js')
const RecipeRouter = require('./recipes/recipes-router')

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/auth',authRouter)
server.use('/api/users',userRouter)
server.use("/api/recipes", RecipeRouter);


server.use((err, req, res, next) => { // eslint-disable-line
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  });
});

module.exports = server;
