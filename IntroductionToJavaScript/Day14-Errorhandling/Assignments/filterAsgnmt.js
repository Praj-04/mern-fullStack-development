//a. Filter out all the values with less than 3 characters.

const StringArray = ['hime','madam','hehi','Ad','PrajarP','an','I','Ohi'];

const result = StringArray.filter((element)=> {
return element.length < 3
})

console.log(result);

//------------------------------------------------------------------------------------------------------
//b. Filter out all the values that contain the expression “hi”.

const result1 = StringArray.filter((element) =>{
    return element.includes('hi');
})

console.log(result1);


//------------------------------------------------------------------------------------------------------
//c. Filter out all the values that are palindrome.

function checkPalindrome(str)
{
let newElement = str.split('').reverse().join('');
if(str==newElement){
    return true;
}
else{
    return false;
}
}

const result2=StringArray.filter(checkPalindrome);
console.log(result2);

//------------------------------------------------------------------------------------------------------