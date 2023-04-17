const { loginController, signupController } = require("../controller/auth")

const authRouter = require("express").Router()

authRouter.post('/login',loginController)
authRouter.post('/signup',signupController)


module.exports=authRouter