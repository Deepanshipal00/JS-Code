let score = 30
let score1 = "30a"
// Identify type of variable
console.log(typeof(score)) // number
console.log(typeof(score1))  // string
// convert to number
score = Number(score)  
score1 = Number(score1)  

console.log(typeof(score))  //number
console.log(typeof(score1))  //number
// Score1 is converted into number while its not the appropriate datatype 
console.log(score1)    //Nan
// The out shows NaN -> Not a number 
// NaN is also a number type, and we should check before proceed to the further activities

let score2 = null;

console.log(typeof score2)  //object
// It shows object data type

// Let's convert it to number datatype and check
score2 = Number(score2)  
console.log(typeof score2)    // number
console.log(score2)           // 0
// the value it returns is 0 after datatype become number

// Let's see how undefined works

let score3;

console.log(typeof score3)   // undefined
// It shows undefined

// Let's convert it to numeber data type and check
score3 = Number(score3)
console.log(typeof score3)    //number
console.log(score3) // NaN
// Now the datatype become NaN

// Similarly True converts into 1, False convert into 0

let is_logged_in = 1
// Let's convert the number datatype to boolean
is_logged_in = Boolean(is_logged_in)

console.log(typeof is_logged_in) //  Boolean
console.log(is_logged_in)  //  True

// 1 converts into true and 0 into false
// Empty string "" converts into false and string value "Deepanshi" converts into true

// Let's convert into string
let some_num = 33
some_num = String(some_num)

console.log(typeof some_num)  //String
console.log(some_num)         //33