const { addProduct } = require('../controller/product')

const productRouter = require('express').Router()

productRouter.post('/addProduct',addProduct)

module.exports = {productRouter}