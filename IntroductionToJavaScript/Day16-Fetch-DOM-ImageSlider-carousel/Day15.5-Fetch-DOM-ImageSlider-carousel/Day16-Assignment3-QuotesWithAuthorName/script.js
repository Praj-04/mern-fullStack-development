const quote = document.getElementById("quote");
const author = document.getElementById("author");
const button = document.getElementById("button-click");



function updatePage(jsonData,count){
    quote.innerHTML = ` " ${jsonData.quotes[count].quote } " `;
    author.innerHTML = jsonData.quotes[count].author;
   count++;
}


async function loadQuotes() {
  const response = await fetch("https://dummyjson.com/quotes");
  console.log(response);
  const jsonData = await response.json();


  let count = 0;
  updatePage(jsonData,count)

  if(count<30){
    button.addEventListener("click", ()=>{
        count++;
        updatePage(jsonData,count)
    });
  }

  



 

  
}

loadQuotes()



