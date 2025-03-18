// Call My name Function

function myName(){
    console.log("D")
    console.log("e")
    console.log("e")
    console.log("p")
    console.log("a")
    console.log("n")
    console.log("s")
    console.log("h")
    console.log("i")
}

// myName -> Reference () -> Execute
myName();

// Add two numbers

function sum(num1, num2){  // These are known as parameters
    result = num1 + num2;
    console.log(result);
}

sum(33, 23) // 56 

// when they are executed or call the function, the values being pass known as arguments
// Datatype checking is necessary

// Let's Store the value of sum()
const sumNum = sum(1,2)
console.log("Result :", sumNum); // Result : undefined

function multiply(num1, num2){
    let result = num1 * num2;
    return result;
    console.log(result); // it will not executed
}

console.log("Result :",multiply(20, 2)); // Result : 40
// return statement is to terminate the execution after the function will stop executing

function sub(num1, num2){
    return num1 - num2;
}

console.log(sub(40, 20)); // 20

function loginUserMessage(username = "Name"){
    if(username === undefined){  // or !username
        console.log("Please enter a username");
        return // to stop execution
    }
    return `${username} Just logged in`;
}

console.log(loginUserMessage("Deepanshi")); //Deepanshi Just logged in
console.log(loginUserMessage());
// Please enter a username
// undefined Just logged in (after return -> undefined)


// What if we left our arguments empty during executing function -> returns undefined

// we can assign default value in parameters (It will executed with this value if no value is assigned to arguments), if the value is assign to argument function will overwrite it


