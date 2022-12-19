const a =[1,2,3,4,5,6];

function isEven(num){
    return num%2==0;
}

function isOdd(num){
    return num%2!=0;
}

function square(num){
    return num*num;
}

function negative(num)
{
    return -num;
}
// const result = a.filter(isEven);
// console.log(result);


// const result1 = a.filter((element)=>{
//     return element%4==0;
// })
// console.log(result1);




const mapResult = a.map(square);
console.log(mapResult);

const mapResult1 = a.map( negative);
console.log(mapResult1);