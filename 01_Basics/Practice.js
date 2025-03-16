// Objects
// Two ways to declare an object -> Literal Object(Creating Individual Objects), and Constuctor Objects(To create multiple instances by similar template)
// new object(), function object(arg1, arg2, arg3);

//Singleton -> A unique object
// Object.create

//Object Literal

const mySym = Symbol("Key1")  // Declare symbol

const JsUser = {
  name : "Deepanshi",
  "full name" : "Deepanshi Pal",
  // mySym : "mykey1",
  [mySym] : "mykey1",  // Declaration syntax
  age : 22,
  location : "Noida",
  email : "deepanshi@gmail.com",
  isLoggedIn : false,
  lastLoginDays : ["Monday", "Friday"]
}

//To access values
console.log(JsUser.email);   // deepanshi@gmail.com
console.log(JsUser["name"]);   // Deepanshi
//we can't access full name by ..full name
console.log(JsUser["full name"]);  // Deepanshi Pal
// console.log(JsUser.mySym);  // mykey1
// console.log(typeof JsUser.mySym);  // String
console.log(JsUser[mySym]); // mykey1

// Overwrite values

JsUser.email = "deepanshipal@gmail.com";
console.log(JsUser["email"]); // deepanshipal@gmail.com

// Can't make any changes to object after freezing it

// Object.freeze(JsUser);
JsUser.email = "deepanshi@gmail.com";
console.log(JsUser.email); // deepanshipal@gmail.com
console.log(JsUser);
/*
{
  name: 'Deepanshi',
  'full name': 'Deepanshi Pal',
  age: 22,
  location: 'Noida',
  email: 'deepanshipal@gmail.com',
  isLoggedIn: false,
  lastLoginDays: [ 'Monday', 'Friday' ],
  [Symbol(Key1)]: 'mykey1'  // symbol key
}
*/

JsUser.greeting = function(){
  console.log(`Hello ${this.name}`) //JsUser.name returns same value
}

console.log(JsUser.greeting);    // [Function (anonymous)] -> Function is not executed and returning reference.
console.log(JsUser.greeting());  // Hello Deepanshi
