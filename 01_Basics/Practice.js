// Array

const myArray = [0, 1, 2, 3, 4, 5, "Deepanshi", true]
// A single variable can strore different datatype elements in an array form, they are resizable

// To access an element form array

console.log(myArray[6])  // Deepanshi

// Arraay copy operations create Shallow Copies(whose properties share the same reference (Heap Memory)) -> how data is duplicated and how modifications affect the original and copied structures.

//Another way to declare array
const myBooks = new Array("Thinking Fast & Slow", "When Breath Becomes Air", "Principles By Ray Dalio");

console.log(myBooks);
/* [
  'Thinking Fast & Slow',
  'When Breath Becomes Air',
  'Principles By Ray Dalio'
] */
console.log(myBooks[2]);  // Principles By Ray Dalio

//Array Methods

myBooks.push("Deep Work", "Almanak of Naval Ravikant");  // push elements to an array
myBooks.pop(); // Remove last elements from array
myBooks.unshift("Big Debt Crises") // Insert an element at 0 index, but it shift rest of elements from their positions.
myBooks.shift(); // Remove first element form array
console.log(myBooks.length);  
console.log(myBooks);
console.log(myBooks.includes("Deep Work")); // true
console.log(myBooks.indexOf("Hello World")); // -1 (When element doesn't exists)
console.log(myBooks.indexOf("Deep Work"));  //3

const newArr = myBooks.join();
console.log(newArr); // Thinking Fast & Slow,When Breath Becomes Air,Principles By Ray Dalio,Deep Work
console.log(typeof newArr); // String

// Slice and Splice

const myArr = new Array(1, 2, 3, 4, 5, 6);
console.log(myArr);  // [ 1, 2, 3, 4, 5, 6 ]

const myA1 = myArr.slice(1, 3);
console.log("A", myArr);  // A [ 1, 2, 3, 4, 5, 6 ]
console.log(myA1); // [ 2, 3 ]

// Extracts a section of an array and returns a new array containing the extracted elements.
// The original array remains unchanged.

const myA2 = myArr.splice(1,3); 
console.log("B", myArr);   // B [ 1, 5, 6 ]
console.log(myA2);   // [ 2, 3, 4 ]

// Modifies the original array by removing or replacing existing elements and/or adding new elements. 

let arr1 = [10, 20, 30, 40, 50];
arr1.splice(1, 3);  // Removes 3 elements starting from index 1
console.log(arr1);   // Output: [10, 50]

let arr2 = [10, 50];
arr2.splice(1, 0, 20, 30, 40);  // Inserts elements at index 1
console.log(arr2);   // Output: [10, 20, 30, 40, 50]

let arr3 = [10, 20, 30, 40, 50];
arr3.splice(1, 2, 100, 200);  // Replaces 20 & 30 with 100 & 200
console.log(arr3);   // Output: [10, 100, 200, 40, 50]

let arr = [1, 2, 3, 4, 5];
arr.splice(2);  // Removes everything from index 2 onward
console.log(arr);  // Output: [1, 2]


