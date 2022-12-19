
const orderPizza = (callback) =>{
    setTimeout(()=>{
const pizza = '🍕';
callback(pizza);
    },2000)
}


orderPizza((pizza)=>{
console.log('here is my ',pizza)
})