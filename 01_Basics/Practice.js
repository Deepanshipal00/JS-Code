//Loops - Iteration

// for 

for(let i = 1; i <= 10; i++){
  console.log(i);
  if (i == 5){
    console.log("Give me HI 5")
  }
}


// var decleartion, condition check(true -> Execute, false -> break), Update the counter variable after each iteration 
// Initialization, condition, increment/decrement

for(let i = 1; i <= 10; i++){
  console.log(`Outer Loop Value ${i}`)
  for(let j = 1; j <= 10; j++){
    // console.log(`Inner Loop Value ${j} and inner loop ${i} `);
    console.log(i + "*" + j + "=" + i*j); // Print table
  }
}

let myArray = ["Flash", "Batman", "Superman"]

for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index];
  console.log(element);
}


// Keywords
// break and continue

for(let i = 1; i <= 20; i++){
  if(i == 5){
    console.log('Detected 5')
    break;
  }
  console.log(`Value of i is ${i}`);
}
// After break it gets out of the iteration and stop executing
/*
Value of i is 1
Value of i is 2
Value of i is 3
Value of i is 4
Detected 5
*/

for(let i = 1; i <= 10; i++){
  if(i == 5){
    console.log('Detected 5')
    continue;
  }
  console.log(`Value of i is ${i}`);
}
// Execution is Skip for once and continue
/* 
Value of i is 1
Value of i is 2
Value of i is 3
Value of i is 4
Detected 5
Value of i is 6
Value of i is 7
Value of i is 8
Value of i is 9
Value of i is 10
*/



