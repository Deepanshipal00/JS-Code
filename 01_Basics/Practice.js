const myObject = {
  'game1' : 'NFS',
  'game2' : 'Spiderman'
}

// for(const [key, value] of myObject){
//   console.log(key, ":-", value);
// } // Objects are not iteratable that way

// for...of works with iterables: It works with iterable objects like arrays, Map, Set, etc., to iterate over values. However, plain objects are not iterable directly, so for...of doesn't work with them. To iterate over an object's properties, you would need to use Object.keys(), Object.values(), or Object.entries().

const lang = {
  js : 'Javascript',
  cpp : 'C++',
  rb : 'Ruby',
  swift : 'Swift by apple'
}

// for in loop
// It iterates over the enumerable properties (keys) of an object.

for(const key in lang){
  console.log(key);
  console.log(lang[key]);
}

// js, cpp, rb, swift
// javascript, C++, Ruby, Swift by apple

let testArr = [12, 13, 14, 15, 16];

for (const num in testArr){
  console.log(num); // 0, 1, 2, 3, 4
  console.log(testArr[num]); // 12, 13, 14, 15, 16
}

// Let's Check if it's work on map object
// map is not iteratable because it's designed for key-value storage, not ordered collections, and lacks the [Symbol.iterator] method required for iteration. 
const map = new Map()
map.set('IN', 'India');
map.set('USA', 'United States of America');
map.set('Fr', 'France');

for(const val in map){
  console.log(val, ":-", map[val]);
} // It will not work

// For each Loop

const coding = ['Js', 'Ruby', 'Java', 'Python', 'Cpp'];


// call back function
// item is the array value that are passing to parameter
coding.forEach( function (item){
  console.log(item);
})
// Output : - All items(values) inside coding

coding.forEach( (item) => {
  console.log(item);
})
// Output : - All items(values) inside coding

function printMe(item){
  console.log(item);
}
// Pass on this function to call back
coding.forEach(printMe);

// parameter -> item(values), index(keys), arr(list)
coding.forEach( (values, index, arr) =>{
  console.log(index, ":-", values, arr);
});

/*
0 :- Js [ 'Js', 'Ruby', 'Java', 'Python', 'Cpp' ]
1 :- Ruby [ 'Js', 'Ruby', 'Java', 'Python', 'Cpp' ]
2 :- Java [ 'Js', 'Ruby', 'Java', 'Python', 'Cpp' ]
3 :- Python [ 'Js', 'Ruby', 'Java', 'Python', 'Cpp' ]
4 :- Cpp [ 'Js', 'Ruby', 'Java', 'Python', 'Cpp' ]
*/

 const myCoding = [
  {
    languageName : "javascript",
    languageFilename : "js",
  },
  {
    languageName : "Ruby",
    languageFilename : "rb",
  },
  {
    languageName : "Python",
    languageFilename : "py",
  },
  {
    languageName : "Java",
    languageFilename : "java",
  }
 ]

 myCoding.forEach( (item) => {
  console.log(item.languageName);
 } );
 // javascript, Ruby, Python, Java
 


