//Finding the elements

//getElementById
// const box1= document.getElementById('box-1');
// console.log(box1);


//getElementsByTagName
// const divs = document.getElementsByTagName('div');
// console.log(divs);


// const paragraphs = document.getElementsByTagName('p');
// console.log(paragraphs);


//getElementsByClassNAme
// const container = document.getElementsByClassName('container');
// console.log(container);


//querySelector and querySelectorAll
// const box = document.querySelectorAll('.container .box');
// console.log(box);

//...........................................................................

//Changing the Html elements

//1) changing html element using innerHTML

// const box2= document.getElementById('box-2')
// box2.innerHTML = "This is box-2";
// box2.innerHTML = "<h2>You can also add an tags,div inside here </h2> "
// box2.innerHTML="<div> <h1> You can add div tags too </h1> </div>"

//2) changing attributes of html element in runtime
// document.getElementById('my-img').src = "https://via.placeholder.com/100"

//3) Changing attributes of html element in runtime(we will use this mostly)
//we can add ,remove and toggle the  classList

// const box3 = document.getElementById('box-3');
// box3.classList.add('fancy');

//4) creating an html element in runtime and adding it to another html element
const dabbas = document.getElementsByClassName('container');

for(let i=0;i<10;i++){
const boxes=document.createElement('div');
boxes.classList.add('box');

dabbas[1].appendChild(boxes);  //[1] because we want to insert inside 2nd container class..starts with 0.


}

