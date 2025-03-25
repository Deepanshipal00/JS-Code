// Control Flow or Logic Flow

// if
// if(condition)-> If this condition is true code execute, if the condition is false code will not exceute {inside this scope}

//Example
const isUserLoggedIn = true;

if(isUserLoggedIn){
  console.log('Welcome Back!') // Welcome Back!
}

const temperature = 41;
if (temperature < 50){
  console.log('Temperature is less than 50');  // Temperature is less than 50
}else{
console.log('Temperature is greater than 50'); // Not executed
}

if(temperature === 50){
  console.log("Temperature is Hotter") // Condition is not true -> Not Executed
}else{
  console.log("Temperature is Rising") // This will execute -> Temperature is Rising
}

const score = 200;
if(score >= 100){
  const power = "Fly";
  console.log(`Power : ${power}`); // Power : Fly
}

// Implicit Scope
const balance = 1000;
if(balance > 50) console.log("Test"); // Test

// Nested Loops
if(balance < 500){
  console.log("Balance is less than 500");
}else if(balance < 750){
  console.log("Balance is less than 750");
}else if(balance < 900){
  console.log("Balance is less than 900");
}else{
  console.log("Balance is less than 1000 but greater than 900") // This will execute, above condition are not true
}

// Logical Operator AND &&, OR ||

const userLogIn = true;
const debitCard = true;
const logInFromGoogle = false;
const logInFromEmail = true;

if (userLogIn && debitCard){
  console.log("Allow to buy course"); // Allow to buy course
}

if(logInFromEmail || logInFromGoogle){
  console.log("User Logged In");  // User Logged In
}


// && -> Both the condition must be true to execute the code
// || -> One of the condition should be true to execute the code
//comparision operator
// <(less than), >(Greater than), <=(less than equals), >=(Greater than equals), =(assignment operator), ==(equals), !=(not equals), ===(type and value equals or strict equality operator), !== (not equal value or not equal type)

//Switch

/*
***** Syntax *****
switch(key) {
      case value:
        break;

      default:
        break;
}
*/

// Shift + Alt + down arrow to duplicate
const month = 3;

switch(month){
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("February");
    break;
  case 3:
    console.log("March");
    break;
  case 4:
    console.log("April");
    break;
  case 5:
    console.log("May");
    break;
  case 6:
    console.log("June");
    break;
  case 7:
    console.log("July");
    break;
  case 8:
    console.log("August");
    break;
  case 9:
    console.log("September");
    break;
  case 10:
    console.log("October");
    break;
  case 11:
    console.log("November");
    break;
  case 12:
    console.log("December");
    break;
  default:
    console.log("Please enter Month number")
    break;
}
//March
// if break is not given/commented in 3rd condition where which is true, after that everything is executes except default condition

// Truthy or Falsy Value
const userEmail = "deepanshi@gmail.com";

if (userEmail){
  console.log(`Got user Email`); // User Logged In
} else{
  console.log(`Don't have user Email`)
}
// "String have Something" -> True
// ""-> Empty string is false
// [] -> Empty array is true

//Falsy Values -> false, 0, -0, BigInt 0n, "", null, undefined, NaN
//Truthy Values -> Except falsy value such as "0", "false", " ", [], {}, function(){}

const checkArray = [];
if (checkArray.length === 0){
  console.log("Array is Empty"); // Array is Empty
}

const emptyObj = {};
if(Object.values(emptyObj).length === 0){
  console.log("Object is Empty"); // Object is Empty
}

// false == 0 -> True
// false == '' -> True
// 0 == '' -> True

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10 // 5
// val1 = null ?? 10 // 10
// val1 = undefined ?? 15  // 15
val1 = null ?? 10 ?? 15 // 10

// To prevent fallback from errors in code execution
console.log(val1);

//Ternary Operator

// condition ? true : false

const iceTeaPrice = 100;

iceTeaPrice >= 80 ? console.log("greater than 80") : console.log("Less than 80")