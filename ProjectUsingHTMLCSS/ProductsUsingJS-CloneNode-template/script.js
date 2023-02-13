const productBox = document.getElementById("product-box");
const container = document.getElementById('container')
const productTemplate = document.getElementById('prod-template')

async function fetchData() {
  const response = await fetch("https://dummyjson.com/products");
  const jsonData = await response.json();
  const products = jsonData.products;
  console.log(products);

  bindData(products);
}

function bindData(products) {
  products.forEach(product => {
    const productBoxClone = productTemplate.content.cloneNode(true);
    //    console.log(productBoxClone)

    const myImage = productBoxClone.querySelector("#my-img");
    const title = productBoxClone.querySelector("#title");
    const description = productBoxClone.querySelector("#description");
    const brand = productBoxClone.querySelector("#brand");
    const rating = productBoxClone.querySelector("#rating");
    const price = productBoxClone.querySelector("#price");
    // console.log("hey");

   

 
    myImage.src = product.images[0];
    title.innerHTML = product.title;
    description.innerHTML = product.description;
    brand.innerHTML = `Brand: ${product.brand}`;
    rating.innerHTML = `Rating: ${product.rating}`;
    price.innerHTML = `Price: ${product.price} Rs`;


    const length = product.images.length;
    let count=0;
    // console.log(length)
    const leftButton = productBoxClone.querySelector('#left-btn')
const rightButton = productBoxClone.querySelector('#right-btn')

rightButton.addEventListener('click', ()=>{
    if(count<length-1){
        count++;
        myImage.src = product.images[count];
         }
})

leftButton.addEventListener('click', ()=>{
    if(count>0){
        count--
        myImage.src = product.images[count];
         }
})

    container.appendChild(productBoxClone);
   
  });
}

fetchData();
