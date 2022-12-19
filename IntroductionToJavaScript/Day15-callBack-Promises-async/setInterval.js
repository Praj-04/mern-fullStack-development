
let count = 0;
console.log('before calling function');

function incrementCount(){
    count++;

    const date = new Date().toTimeString();
    console.log(date);

    if(count==5){
        clearInterval(setId);
    }
}

const setId= setInterval(incrementCount,1000);


console.log('after calling function ');