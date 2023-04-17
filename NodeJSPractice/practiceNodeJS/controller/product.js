const Product = require('../model/product')

const addProduct = (req,res)=>{
const title = req.body.title;
const price = req.body.price;

const id = Math.floor(Math.random()*1000);

if(!title || !price){
    res.status(401).send('title and price is required')
    return
}


 Product.push({
id,
title,
price
})

res.status(200).send('New Product is added')
// res.status(200).send(newProduct)
return

}



module.exports = {addProduct}
