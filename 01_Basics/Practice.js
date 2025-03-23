// This & Arrow Function

const user = {
    username: "Deepanshi",
    price: 999,
    welcomeMessage: function(){
        console.log(`Hey! ${this.username}, Welcome to website`)
        console.log(this)
    }
}
user.welcomeMessage(); //Hey! Deepanshi, Welcome to website
/*
{
    username: 'Deepanshi',
    price: 999,
    welcomeMessage: [Function: welcomeMessage]
  }
*/

console.log(this) // In Node Environment -> {}
// In browser ->  Window {0: Window, window: Window, self: Window, document: document, name: '', location: Location, …}
// In browser the engine running is window(Global Object)
// this to refer current context

function chai(){
    let username = "Deepanshi"
    // console.log(this);
    console.log(this.username); // undefined
}

chai();
// we cannot use this for function, similarly not for expression
// Output -> console.log(this) : chai()
/*
<ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Getter/Setter],
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  performance: [Getter/Setter],
  fetch: [Function: fetch],
  navigator: [Getter],
  crypto: [Getter]
}
*/

const code = () => {
    const username = "Deepanshi";
    console.log(this.username); // undefined
    console.log(this); // {}
}

code();

// const add2 = (num, num2 = 2) => {return num + num2} // Explicit return
// const add2 = (num, num2 = 2) => num + num2;  // implicit return
const add2 = (num, num2 = 2) => (num + num2);  // implicit return
console.log(add2(2))  // 4

const add = (num1, num2) => ({username : "Deepanshi"}) // returning object
console.log(add(3,4)); // {username: 'Deepanshi'}

// const myArray = [2, 4, 6, 8, 10];
