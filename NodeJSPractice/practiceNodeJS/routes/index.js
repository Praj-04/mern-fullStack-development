const authRouter = require('./authRouter')
const { productRouter } = require('./productRouter')
const userRouter = require('./userRouter')
const router = require('express').Router()


router.use('/auth',authRouter)
router.use('/users',userRouter)
router.use('/product',productRouter)


module.exports=router