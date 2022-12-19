
function orderPizza(){
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            const isAvailable=false;
            if(isAvailable){
                const pizza ='🍕';
          resolve(pizza); 
            }else{
                  reject('we donot have pizza');
            }
          
        },2000)
        
    })
}


const pizzaPromise= orderPizza();

pizzaPromise.then((pizza,err)=>{
console.log('my pizza',pizza);
// console.log(err)
}).catch(err =>{
    console.log('error occured',err);
})

