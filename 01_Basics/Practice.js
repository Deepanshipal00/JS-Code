console.log("2" > 1); //true
console.log("02" > 1); //true

console.log(null > 0);  // False
console.log(null == 0); // False
console.log(null >= 0); // True

console.log(undefined == 0); //False
console.log(undefined > 0);  //False
console.log(undefined < 0);  //False

console.log("2" === 2);

// The syntax for conditionals and == are different does conversion first and then compare
// === is for strictly check the value and datatypes