const counter=document.getElementById('counter-Number');
const posNum = document.getElementById('pos-Num')
const negNum = document.getElementById('neg-Num')


// let count = counter.innerHTML;
// function increment(){
//     if(count<10){
//     count++;
// counter.innerHTML = count;
// }
// }
// posNum.addEventListener('click',increment)

// function decrement(){
//     if(count>0){
//     count--;
// counter.innerHTML = count;
// }
// }

// negNum.addEventListener('click',decrement)

let count = 0;
updateCount();

posNum.addEventListener('click',()=>{
    if(count<10){
        count++;
        updateCount();
    }
    

})

negNum.addEventListener('click',()=>{
    if(count>0){
        count--;
        updateCount();
    }
  

})

function updateCount(){
    counter.innerHTML=count;
}