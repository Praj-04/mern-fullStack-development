const iconElement = document.getElementById('icon');
console.log(iconElement);

let topPart = document.getElementsByClassName('top');
let dropDown = ()=>{
    
    const boxElement1 = document.createElement('a');
    const text1 = document.createTextNode('News');
    boxElement1.appendChild(text1);
    boxElement1.classList.add('box');
    topPart[0].append(boxElement1);

    const boxElement2 = document.createElement('a');
    const text2 = document.createTextNode('Contact');
    boxElement2.appendChild(text2);
    boxElement2.classList.add('box');
    topPart[0].append(boxElement2);

    const boxElement3 = document.createElement('a');
    const text3 = document.createTextNode('About');
    boxElement3.appendChild(text3);
    boxElement3.classList.add('box');
    topPart[0].append(boxElement3);
    
      

}


iconElement.addEventListener('click',dropDown);