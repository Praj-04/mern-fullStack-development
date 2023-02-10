const name =document.getElementById('input-text')
const submit = document.getElementById('submit-btn')


submit.addEventListener('click', (event)=>{
    event.preventDefault();
    console.log(name.value)
})



const number = document.getElementById('counter')
let count = number.innerHTML;

const inc = document.getElementById('increment')
const dec = document.getElementById('decrement')

inc.addEventListener('click',(event)=>{
    event.preventDefault();
    if(count<10){
        count++;
        number.innerHTML=count
    }
   
    
})

dec.addEventListener('click',(event)=>{
    event.preventDefault();
    if(count>0){
    count--;
    number.innerHTML=count
     }
})