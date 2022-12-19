const box = document.getElementById('box');
const buttonClick= document.getElementById('button-click');


let jokes = document.createElement('div');
box.appendChild(jokes);

async function fetchData(){
 try{
const response = await fetch('https://icanhazdadjoke.com/slack');
const jsonData = await response.json();


jokes.innerHTML =` ${jsonData.attachments[0].fallback}`
jokes.classList.add('jokeStyle')



console.log(jsonData);

}catch(err){
console.log(err);
}
}

fetchData();

buttonClick.addEventListener('click',(event)=>{
    fetchData();
})