
const score = 400;

//We can explicitly decare the number datatype
const balance = new Number(400);
console.log(balance); // [Number: 400]
console.log(typeof balance); // Object

//conver the number into string through a method called toString()
let myStringNum = balance.toString();
console.log(myStringNum);  // 400
console.log(typeof myStringNum); // string

//now we can use string properties on this number like length etc

const priceValue = new Number(25.4958);
let fixedValue = priceValue.toFixed(2); 
console.log(fixedValue); // 25.50 (after decimal)

let preciseValue = priceValue.toPrecision(3);
console.log(preciseValue);  // 25.5 (overall value precision)
console.log(typeof preciseValue);  // precision returns value in string datatype

const hundredValue = new Number(10000000000);
let simplifyValue = hundredValue.toLocaleString(); //Defult US Value
let simplifyValueInd = hundredValue.toLocaleString('en-IN')
console.log(simplifyValue);  // 10,000,000,000
console.log(simplifyValueInd); // 10,00,00,00,000
console.log(typeof simplifyValue);  //string


// Maths

console.log(Math); //It's an object and have multiple properties : Object [Math] {}
// Values (already defined) we can access with a dot .PI, .E, .LN2, .LN10, .LOG2E, LOG10E, .SQRT1_2, .SQRT2

console.log(Math.SQRT1_2); // 0.7071067811865476

//Methods
console.log(Math.abs(-4)); // 4
console.log(Math.round(4.5)); // 5
console.log(Math.ceil(4.2)); //5
console.log(Math.floor(4.8));  //4
console.log(Math.ceil(4.0));  //4
console.log(Math.ceil(4.00000000000000000000001));  //4
console.log(Math.sqrt(36));  // 6
console.log(Math.cbrt(216)); // 6
console.log(Math.hypot(3, 4)); // 5
console.log(Math.max(2,5, 8, 12, 22)); // 22
console.log(Math.min(2,5, 8, 12, 22)); // 2
console.log(Math.pow(10, 2)); // 100
console.log(Math.trunc(12.3466)); // 12
console.log((Math.random()*10) + 1);  // Default value will be in between 0 and 1 in a decimal form

const max = 20;
const min = 10;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);


