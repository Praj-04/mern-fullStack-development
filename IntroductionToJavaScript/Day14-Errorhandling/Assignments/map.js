const numbers=[10,9,2,1,7,3,15,4];

// . Modify and return an array with square roots.

const result = numbers.map((element) => {
    return element*element;
})

console.log('the square of number is} :' +result);


//--------------------------------------------------------------------
//b. Modify the Numbers and make them String and return an array.


const result1 = numbers.map((element)=>{
    return element.toString();
})

console.log("converting numbers to string " , result1);