const cuisine = document.getElementById("cuisine");
const mealType = document.getElementById("meal-type");
const diet = document.getElementById("diet");
const query = document.getElementById("query");
const box = document.getElementById('box')
const recipeContent = document.getElementById('recipe-content')

const boxTemplate = document.getElementById('box-template')
const container = document.getElementById("container");


async function fetchData(cuisine, type, diet, query) {
    // Check if dropdown value is empty, and set to null if it is
    if (cuisine === "") {
        cuisine = null;
    }
    if (type === "") {
        type = null;
    }
    if (diet === "") {
        diet = null;
    }
    if (query === "") {
        query = null;
    }

    // Only include non-null values in API call
    let url =
        "https://api.spoonacular.com/recipes/complexSearch?apiKey=422ed53d94e84c9cb89a7d22da53ad43&number=14&&minCalories=10&minCalories=500";
    if (cuisine) {
        url += `&cuisine=${cuisine}`;
    } if (type) {
        url += `&type=${type}`;
    }
     if (diet) {
        url += `&diet=${diet}`;
    }
     if(query) {
        url += `&query=${query}`;
    }

    console.log("after fetch", cuisine);
    console.log("after fetch", type);
    console.log("after fetch", diet);
    console.log("after fetch", query);

    const response = await fetch(url);
    const data = await response.json();
    const result = data.results;
    console.log(result);
//    console.log(data.results[0].nutrition.nutrients[0].amount)

    bindData(result)  

}


function bindData(info){
    console.log('inside bindData',info)
    info.forEach(item =>{
const boxClone =boxTemplate.content.cloneNode(true); //Check this part
// console.log('works1')
const foodImage=boxClone.querySelector('#food-Img');
const titles = boxClone.querySelector('#title');
console.log('title is ',titles);
const calorie = boxClone.querySelector('#calories')
// console.log('works2')
 console.log(item.title);
 foodImage.src= item.image;
 titles.innerHTML = item.title 
calorie.innerHTML =`${Math.trunc(item.nutrition.nutrients[0].amount)} kCal`

recipeContent.appendChild(boxClone);
    })
    


}

container.addEventListener("change", (event) => {
    event.preventDefault();

    const selectedCuisine = cuisine.value;
    const selectedMealType = mealType.value;
    const selectedDiet = diet.value;
    const searchQuery = query.value;

    fetchData(selectedCuisine, selectedMealType, selectedDiet, searchQuery);
});





// const cuisine = document.getElementById('cuisine');
// const mealType = document.getElementById('meal-type');
// const diet = document.getElementById('diet')
// const query = document.getElementById('query')

// async function fetchData(cuisine,type,diet,query){

//         console.log('inside fetch',cuisine)
//         console.log('inside fetch',type)
//         console.log('inside fetch',diet)
//         console.log('inside fetch',query)
//         if(cuisine==undefined){
//             cuisine=null
//                }else if(type==undefined){
//                 type=null
//                }else if(diet==undefined){
//                 diet=null
//                }else if(query==undefined){
//                 query=null
//                }

//                console.log('after fetch',cuisine)
//         console.log('after fetch',type)
//         console.log('after fetch',diet)
//         console.log('after fetch',query)
//       const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=422ed53d94e84c9cb89a7d22da53ad43&number=5&cuisine=${cuisine}&type=${type}&diet=${diet}&query=${query}`)

//      const data = await response.json();
//      console.log(data);
//  }
    





// cuisine.addEventListener('change',(event)=>{
//     event.preventDefault();
//   let cuisine=event.target.value
  
//       mealType.addEventListener('change',(event)=>{
//     event.preventDefault();
//     let type= event.target.value
   
//     diet.addEventListener('change',(event)=>{
//         event.preventDefault();
//         let diet =event.target.value   
    
//         query.addEventListener('click',(event)=>{
//             event.preventDefault();
//             let query = event.target.value

//  fetchData(cuisine,type,diet,query);

// })

// })

// })

// })





