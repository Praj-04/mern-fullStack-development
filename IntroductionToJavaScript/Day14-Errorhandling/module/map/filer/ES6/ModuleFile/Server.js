import {addition,substract} from "./Utility.js"

//import * as allFunction from "./Utility.js" --> import all exports from utility at once.. can give any alias name.this is not reommmended
// import {addition as add,substract} from "./Utility.js"   ->  can give alias name and use it below
//import multiply from "./Utility.js"
import randonNAme from "./Utility.js" //can use any name while importing default

const a =5;
const b=4;
const result = addition(a,b)
console.log(result);

const substractResult = substract(a,b)
console.log(substractResult);

//default with any name 
const mulResult=randonNAme(a,b);
console.log(mulResult);
