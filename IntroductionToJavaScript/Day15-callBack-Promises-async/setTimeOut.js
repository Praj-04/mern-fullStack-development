const a = 10;
const b=20;

console.log('before calling setTimeout');
function greet(){
    const c = a+b;
    console.log(c);
    }


   const setId = setTimeout(greet,2000);//we are setting a delay of 2s
   clearTimeout(setId); //now the greet function will not execute
    console.log('after calling settimeout..this code will execute..wont wait for greet function to complete execution');