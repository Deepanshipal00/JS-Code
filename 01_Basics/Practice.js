const marvel = ["Ironman", "Thor", "Spiderman"];
const dc = ["Superman", "Flash", "Batman"];

marvel.push(dc);
console.log(marvel); // Array insert inside marvel an element (Nested array)
// [ 'Ironman', 'Thor', 'Spiderman', [ 'Superman', 'Flash', 'Batman' ] ]
//Access Nested elements

console.log(marvel[3][1]); //Flash

const marvel_heros = ["ironman", "spiderman", "thor", "C America"];
const dc_heros = ["superman", "flash", "batman"];

//Concat function returns a new array (doesn't merge like push)

const allHeros = marvel_heros.concat(dc_heros);
console.log(allHeros);
/*[
  'ironman',
  'spiderman',
  'thor',
  'C America',
  'superman',
  'flash',
  'batman'
]
*/
// Alternate Method -> Spread Operator
const allNewHeros = [...marvel_heros, ...dc_heros];
console.log(allNewHeros);  // returns same output given above

const Arr1 = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const Arr2 = Arr1.flat(Infinity);
// we can pass a value in flat method as the depth of its complexity(Nested elements) -> 3 or Infinity
console.log(Arr2); //[1,2,3,4,5,6,7,4,5]


// Extraction and Conversion

console.log(Array.isArray("Hello")); // False
console.log(Array.from("Hello"));   // [ 'H', 'e', 'l', 'l', 'o' ] -> Convert into Array 
console.log(Array.from({name : "Deepanshi"})); // []
// plain objects are not iterable by default, so Array.from({ name: "Deepanshi" }) results in an empty array.
// need to instruct for converstion otherwise it will return empty array

console.log(Object.entries({ name: "Deepanshi", age : 22, city: "Noida"}));
// Output: [ [ 'name', 'Deepanshi' ], [ 'age', 22 ], [ 'city', 'Noida' ] ]

//we can also access keys and values saperately


let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));  // [ 100, 200, 300 ]



