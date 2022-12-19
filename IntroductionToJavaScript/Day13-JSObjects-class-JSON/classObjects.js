class Vehicle{
    constructor(){
        this.model='xuv';
        this.wheels = 4;
    }
start(){
    console.log('Vehicle started');
}

    }


const obj1=new Vehicle();
const obj2 = new Vehicle();

console.log(obj1);
console.log(obj1.start);



//CONVERTING FROM JSON OBJECT TO JAVACRIPT OBJECT ==>  '{ }'

const jsonObj = `{"userId":1,
"id": 2,
"title": "qui est esse",
"body":"est rerum tempore vitaesequi sint nihil reprehenderit dolor beatae ea dolores nequefugiat blanditiis voluptate porro vel nihil molestiae ut reiciendisqui aperiam non debitis possimus qui neque nisi nulla"}`;


const javaScriptObj = JSON.parse(jsonObj);
console.log(javaScriptObj);


//,......................................
const jsontextData = `{"name":"Prajna",
    "age": 22}`;

 const javascriptObjs = JSON.parse(jsontextData);

 console.log(javascriptObjs);


 const jsonObj2 = {
    name :'Adi',
    age : 3
 };

const jsonString2 = JSON.stringify(jsonObj2);
console.log(jsonString2);
