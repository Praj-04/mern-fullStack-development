function orderPizza(myFunction){

    bakePizza((pizza)=>{
        myFunction(pizza);
    })
    }


function bakePizza(callback){
    setTimeout(()=>{
    makeDough((dough)=>{
        const pizza = dough +'🍕'
        console.log('baked the pizza' ,pizza);
        callback(pizza);
    })
},2000)
    
        
}

function makeDough(callback){
    setTimeout(()=>{
        const dough ='🍥';
        console.log('baked the dough',dough);
        callback(dough);
    },2000);
   
}




function notifyMeOnSuccess(pizza){
    console.log('here is the notification for pizza'+pizza);
}


orderPizza(notifyMeOnSuccess)