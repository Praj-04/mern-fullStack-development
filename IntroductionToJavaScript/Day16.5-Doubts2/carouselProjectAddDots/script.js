const images = ['https://images.unsplash.com/photo-1669749268209-b91bef5874ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDM0fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
'https://images.unsplash.com/photo-1575550959106-5a7defe28b56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2lsZGxpZmV8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
'https://images.unsplash.com/photo-1549366021-9f761d450615?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d2lsZGxpZmV8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
'https://images.unsplash.com/photo-1589656966895-2f33e7653819?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHdpbGRsaWZlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
'https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHdpbGRsaWZlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'
];

const n = images.length;
const flexContainer= document.getElementById('flex-container');
const leftButton=document.getElementById('left-btn');
const rightButton=document.getElementById('right-btn');
const bottomNav=document.getElementById('bottom-nav')



const containerWidth = 80;
const flexContainerWidth = n*80;

flexContainer.style.width=flexContainerWidth;
for(let i=0;i<n;i++){
    const newImg = document.createElement('img');
    newImg.src=images[i];
    newImg.classList.add('img-style')
    flexContainer.appendChild(newImg);


    const dotdiv = document.createElement('div');
    dotdiv.classList.add('round');
            bottomNav.appendChild(dotdiv);
  
            dotdiv.addEventListener('click',(event)=>{
              const index =  [...bottomNav.children].indexOf(event.target); //convertingthe dots into an array and getting their index as a position
             // currentPos =index;
            //  showImg();
            showImg(index);
            })
}

let currentPos = 0;
showImg(0)


leftButton.addEventListener('click',()=>{
if(currentPos>0){
   // currentPos--;
   showImg(currentPos-1);
}else{
    //currentPos = n-1;
    showImg(n-1);
}
// showImg();

})



rightButton.addEventListener('click',()=>{
    if(currentPos<n-1){
        //currentPos++;
        showImg(currentPos+1);
    }else{
        //currentPos = 0;
        showImg(0);
    }
    // showImg();
        })


    function showImg(position){
      const prevDot=  bottomNav.children[currentPos];
      //prevDot.classList.add('active')
      prevDot.classList.remove('active');
      currentPos=position;
   
         const curDot=bottomNav.children[currentPos];
      curDot.classList.add('active');



const translateXDistance = -currentPos *containerWidth;
flexContainer.style.transform=`translateX(${translateXDistance}vw)`;


        }

       

