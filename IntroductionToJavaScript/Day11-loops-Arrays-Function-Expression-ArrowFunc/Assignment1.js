
let str1 = 'Was it a car or a cat I saw?';
str1 = str1.replace(/[^0-9a-z]/gi, '').toLowerCase();
let revStr = str1.split("").reverse().join("");
(str1==revStr)?console.log("Its a Palindrome"):('Its not a Palindrome');



