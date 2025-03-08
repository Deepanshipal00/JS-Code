//String

const name = "Deepanshi";
const numRepo = 22;

//concatination through string literals or String interpolation
// Allows you to insert variables or expressions inside a string using special syntax

let result = `Hey! My name is ${name} and I have ${numRepo} Repositories`;
console.log(result);

//Another way to string declaration

const gameName = new String("GTA");
console.log(gameName);   // [String: 'GTA']
console.log(typeof gameName);  //Object
//It has key value pair where index represent a key and an individual unit(character) in a string represents its value
//Here we get the length property, Object Properties and Methods
console.log(gameName[0]); // G

//we can access the prototype as well
// provides access to the internal prototype
console.log(gameName.__proto__); // {}

console.log(gameName.length); // 3
console.log(gameName.toLowerCase()); // gta
console.log(gameName.charAt(2));  //A
console.log(gameName.indexOf("A")); //2

const newString = gameName.substring(0, 2);
console.log(newString); //GT

const myName = new String("Deepanshi");
console.log(myName.length); //9
console.log(myName); // [String: 'Deepanshi']
console.log(myName.__proto__);
const newName = myName.substring(0, 5);
console.log(newName); // Deepa
const anotherName = myName.substring(-8, 2);
console.log(anotherName); //De
//In substring method it ignore the arguments and instead of negative value start form 0
const hiname = myName.slice(-6, 6);
console.log(hiname); //pan

const newStringOne = "    Helloooo     "
console.log(newStringOne);     //    Helloooo 
console.log(newStringOne.trim( )); //Helloooo
//trim work for white spaces and line terminals <trimstart() and trimend()>
const url = "https://google.com/google%20link.com"
console.log(url.replace("%20","-"));  //https://google.com/google-link.com
console.log(url.includes("google"));  //true

const link = "Deepanshi-pal-deepanshi@gmail.com";
console.log(link.split("-")) //[ 'Deepanshi', 'pal', 'deepanshi@gmail.com' ]
//split(saperator, limit)
