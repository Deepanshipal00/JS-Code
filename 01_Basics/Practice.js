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


//comparision operator
// <(less than), >(Greater than), <=(less than equals), >=(Greater than equals), =(assignment operator), ==(equals), !=(not equals), ===(type and value equals or strict equality operator), !== (not equal value or not equal type)