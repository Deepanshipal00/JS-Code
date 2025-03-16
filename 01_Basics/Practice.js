const UberUser = new Object();
UberUser.id = "30icd34"
UberUser.name = "deepanshi";
UberUser["age"] = 22;
UberUser.email = "deepanshi@gmail.com";
UberUser.isLoggenIn = true;

// This is a Singleton Object

console.log(UberUser);

const regularUser = new Object();
regularUser.email = "deepanshi@gmail.com";
regularUser.fullname = {
  username : "deepanshi",
  firstname : "Deepanshi",
  lastname : "Pal",
  contact : {
    phone : "3456678996",
    email : {
      first1 : "deepanshi@gmail.com",
      second2 : "deepanshipal@gmail.com"
    }
  }
}

console.log(regularUser.fullname.contact.email.second2); // deepanshipal@gmail.com

// condition ? expressionIfTrue : expressionIfFalse

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};
const obj3 = {...obj1, ...obj2};
const obj4 = {obj1, obj2};
console.log(obj3);  // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
console.log(obj4);  // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } } //nested one


const obj5 = Object.assign({}, obj1, obj2);  // {} -> Target, Objects -> Source
// Target means where values are stored and Source is which values are stored
console.log(obj5);  // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const obj6 = Object.assign(obj1, obj2);
obj6["1"] = "aa";
console.log(obj6);  //{ '1': 'aa', '2': 'b', '3': 'c', '4': 'd' }
console.log(obj1);  //{ '1': 'aa', '2': 'b', '3': 'c', '4': 'd' } 

// Both creates shallow copy but assign method copies prototype

// Array of objects -> Data come from database
const users = [
  {
    id : 1,
    email : "deepanshi@gmail.com",

  },
  {
    id : 2,
    email : "deepanshi@gmail.com",
    
  },
  {
    id : 3,
    email : "deepanshi@gmail.com",
    
  },
  {
    id : 4,
    email : "deepanshi@gmail.com",
    
  }
]

console.log(users[0].id); // 1
console.log(UberUser);
console.log(Object.keys(UberUser)); // [ 'id', 'name', 'age', 'email', 'isLoggenIn' ]
console.log(Object.values(UberUser)); // [ '30icd34', 'deepanshi', 22, 'deepanshi@gmail.com', true ]

console.log(Object.entries(UberUser));
//[ [ 'id', '30icd34' ], [ 'name', 'deepanshi' ], [ 'age', 22 ], [ 'email', 'deepanshi@gmail.com' ], [ 'isLoggenIn', true ] ]

console.log(UberUser.hasOwnProperty('isLoggenIn')); // true




