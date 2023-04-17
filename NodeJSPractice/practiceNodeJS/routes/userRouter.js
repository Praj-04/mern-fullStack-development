const { getAllUsers, getUser, deleteUser } = require('../controller/user')

const userRouter = require('express').Router()

userRouter.get('/all',getAllUsers)
userRouter.get('/user/:id', getUser)
userRouter.post('/user/:id',deleteUser)

module.exports = userRouter