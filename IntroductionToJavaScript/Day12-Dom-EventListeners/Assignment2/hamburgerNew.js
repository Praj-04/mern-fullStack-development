const iconClick = document.getElementById('icon');

let display=document.getElementById('addMenu');
console.log(display);

let displayMenu = () =>{
display.classList.toggle('dropDown');
console.log(display);
}



iconClick.addEventListener('click',displayMenu)