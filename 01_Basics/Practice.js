// IIFE
// IIFE (Immediately Invoked Function Expression) is used in JavaScript primarily to create a new scope. This helps avoid polluting the global namespace and manage variable scope effectively.

function code(){
  console.log(`DB Connected`)
}

code(); // DB Connected

function hello(){
  console.log('Hello')
}
hello(); // Hello

// Named IIFE
(function newCode(){
  console.log(`DB Connected`)
})();  // DB Connected


// Unnamend IIFE
((name) => {
  console.log(`Hello ${name}`)
})('Deepanshi'); // Hello Deepanshi


// We need to give Termination(in previous execution) to Invoke next function