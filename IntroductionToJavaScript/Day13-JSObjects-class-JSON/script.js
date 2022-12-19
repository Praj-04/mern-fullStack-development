const student={
    name : 'Prajna',
    Standard : 10,
    hobbies : ['coding','eating','cooking'],
    foods : {
        monday : 'Pizza',
        tuesady :'Burger'
    }
};
//------------------------------------------------------------
//this 



//------------------------------------------------------------
//object destructuring(introduced in ES6)
// let { name, Standard} = student;
// console.log(name,Standard);

// let { name : myName, Standard : myStd} = student;
// console.log(myName,myStd);

//------------------------------------------------------------
//Adding function as a value to a key
// student.greet = function(){
// console.log('Hello');
// }

// console.log(student.greet());


// const foodsKey = 'foods';

// console.log(student);
// console.log(student[foodsKey]); //accessing the const so not '' for foodsKey

// console.log(student);
// console.log(student.Standard);
// console.log(student['name']);

// //updating the key value pair of an object
// student.name = 'Adhrit';
// console.log(student);

// //adding key-value to an object
// student.isAlive = true;
// console.log(student);





var printTwoNo;

for(var i=0;i<4;i++){
if (i==2){
    printNumTwo = function(){
        return i;
    };
}
}


console.log(printNumTwo());

