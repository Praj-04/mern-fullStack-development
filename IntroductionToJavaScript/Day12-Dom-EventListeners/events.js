const box = document.getElementById('box');
console.log(box);

const logMessage = ()=>{
    console.log('This is a box');
}

box.addEventListener('click',logMessage);
