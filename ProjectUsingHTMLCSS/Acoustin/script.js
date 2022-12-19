// const questionClick = document.querySelectorAll('.container .box');
const questionClick =document.getElementsByClassName('question')
const answer = document.getElementsByClassName('answer')

// console.log(answer);


for(let i=0;i<questionClick.length;i++){
  questionClick[i].addEventListener('click',()=>{
answer[i].classList.toggle('active');
//console.log(answer[i]);
// answer[i].classList.add('active');
  })
}
// questionClick.addEventListener('click',(event)=>{
//     console.log(event.target)
// })






