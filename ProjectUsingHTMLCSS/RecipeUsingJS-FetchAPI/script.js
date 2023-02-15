const cuisine = document.getElementById('cuisine');
const mealType = document.getElementById('meal-type');
const diet = document.getElementById('diet')
const query = document.getElementById('query')

async function fetchData(cuisine,type,diet,query){

        console.log('inside fetch',cuisine)
        console.log('inside fetch',type)
        console.log('inside fetch',diet)
        console.log('inside fetch',query)
        if(cuisine==undefined){
            cuisine=null
               }else if(type==undefined){
                type=null
               }else if(diet==undefined){
                diet=null
               }else if(query==undefined){
                query=null
               }

               console.log('after fetch',cuisine)
        console.log('after fetch',type)
        console.log('after fetch',diet)
        console.log('after fetch',query)
      const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=422ed53d94e84c9cb89a7d22da53ad43&number=5&cuisine=${cuisine}&type=${type}&diet=${diet}&query=${query}`)
      
     const data = await response.json();
     console.log(data);
 }
    






// async function fetchData(cuisines,type,diet,query){

//    if(cuisines==undefined){
//     cuisines=null
//    }else if(type==undefined){
//     type=null
//    }else if(diet==undefined){
//     diet=null
//    }else if(query==undefined){
//     query=null
//    }
//  const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=422ed53d94e84c9cb89a7d22da53ad43&number=5&cuisine=${cuisine}&type=${type}&diet=${diet}&query=${query}`)
//  const data = await response.json();
//  console.log(data);
// }



cuisine.addEventListener('change',(event)=>{
    event.preventDefault();
  let cuisine=event.target.value
  
      mealType.addEventListener('change',(event)=>{
    event.preventDefault();
    let type= event.target.value
   
    diet.addEventListener('change',(event)=>{
        event.preventDefault();
        let diet =event.target.value   
    
        query.addEventListener('click',(event)=>{
            event.preventDefault();
            let query = event.target.value

 fetchData(cuisine,type,diet,query);

})

})

})

})



// query.addEventListener('click',(event)=>{
// event.preventDefault();
// let query = event.target.value
// fetchData(null,null,null,query)
// })

    

