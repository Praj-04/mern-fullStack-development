class Vehicle{

constructor(wheels,isDiesel){
this.wheels = wheels;
this.isDiesel = isDiesel;
}

drive(){
console.log('Driving the  Diesel car')

}

break(){
    console.log(`Its a hatchback with ${this.wheels}  wheels`);
}
}

//creating 2 objects of Vehicle class
const VehicleDetails1 = new Vehicle(4,true);
const VehicleDetails2 = new Vehicle(6,false);

//calling the methods
console.log(VehicleDetails1);
VehicleDetails1.drive();  


console.log(VehicleDetails2);
VehicleDetails2.break();



//iterating the object: VehicleDetails1 using for loop
function iterateFirstObject(){
for(let key in VehicleDetails1){
    console.log('iterating first object using for loop:'+VehicleDetails1[key]);
   }
}
 iterateFirstObject()




//converting the js object to json

const jsonString1 = JSON.stringify(VehicleDetails1);
console.log(jsonString1);

const jsonString2 = JSON.stringify(VehicleDetails2);
console.log(jsonString2);