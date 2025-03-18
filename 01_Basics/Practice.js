// ... these are also known as rest operator (Depends on usecases )
function calculateCartPrice(val1, val2, ...num){ 
    return {val1, val2, num};
}

// Store value in object and array and access them

console.log(calculateCartPrice(100, 400, 345, 456, 643)); 
// { val1: 100, val2: 400, num: [ 345, 456, 643 ] }

//Let's see how to pass object into function and execute

const user = {
    username : "Deepanshi",
    price : 199,
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username}, Cart price is ${anyobject.price}`)
}

handleObject(user); //Username is Deepanshi, Cart price is 199
// typechecking is neccessary in these functions to check whether the key we try to access is available in object

handleObject({
    username : "Deepanshi",
    price : 546
})
//Username is Deepanshi, Cart price is 546

const myNewArray = [23, 45, 56, 67, 78, 89];

function returnSecondValue(anyArray){
    console.log(anyArray[1]);
}

returnSecondValue(myNewArray); // 45
