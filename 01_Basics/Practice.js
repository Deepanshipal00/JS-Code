// While Loops

// condition
let index = 0;
while(index <= 10){
  console.log(`Value of index is ${index}`);
  index = index + 2;
}

let myArray = ["Flash", "Batman", "Superman"];

let arr = 0;
while(arr < myArray.length){
  console.log(`Value is ${myArray[arr]}`);
  arr += 1
}

//Value is Flash
//Value is Batman
//Value is Superman

// Do while Loop

// First execution then check condition

let score = 11;
do{
  console.log(`Score is ${score}`)
  score++;
}while(score <= 10)
// Score is 11


// let score = 1;
// do{
//   console.log(`Score is ${score}`)
//   score++;
// }while(score <= 10)
/*
Score is 1
Score is 2
Score is 3
Score is 4
Score is 5
Score is 6
Score is 7
Score is 8
Score is 9
Score is 10
*/