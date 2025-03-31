const coding = ["js", "ruby", "java", "python", "cpp"];

const values = coding.forEach( (val) => {
  console.log(val);
})

console.log(values);  //undefined

// forEach doesn't retrun any value

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//filter
// filter returns value

const newNums = myNums.filter( (num) => {
  return num > 4
})

console.log(newNums); // [ 5, 6, 7, 8, 9, 10 ]

// Same thing can be done by forEach
const newNums1 = [];

myNums.forEach((val) => {
  if(val > 4){
    newNums1.push(val)
  }
});

console.log(newNums1); //[ 5, 6, 7, 8, 9, 10 ]

const books = [
  { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
  { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
  { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
  { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
  { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
  { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
  { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
  { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
  { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

const userBooks = books.filter((book) =>{
  return book.genre === "History";
})

console.log(userBooks);

for(const bookTitle of userBooks){
  console.log(bookTitle.title)
}
//Book Three, Book Seven

const book2000 = books.filter( (book) => {
  return book.publish >= 2000;
})

console.log(book2000);

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const multiply = myNumbers.map( (num) => num*2);

console.log(multiply); // [2,  4,  6,  8, 10, 12, 14, 16, 18, 20 ]

//Chaining => 
const heyNums = myNumbers
.map((num) => num * 10)
.map((num) => num + 1)
.filter((num) => num >= 40 );

console.log(heyNums);
// [11, 21, 31, 41,  51, 61, 71, 81, 91, 101]
// [41, 51,  61, 71, 81, 91, 101]

// Reduce

const nums = [1, 2, 3];

const myTotal = nums.reduce((acc, currval) => {
  console.log(`acc : ${acc} and currval : ${currval}`);
  return acc + currval
}, 0);

/*
acc : 0 and currval : 1
acc : 1 and currval : 2
acc : 3 and currval : 3
*/

console.log(myTotal); // 6


const shoppingCart = [
  {
    itemName: "JS Course",
    price: 2999
  },
  {
    itemName: "Java Course",
    price: 9999
  },
  {
    itemName: "Python Course",
    price: 999
  },
  {
    itemName: "Data Science Course",
    price: 12999
  },
  {
    itemName: "Mobile Dev Course",
    price: 6999
  }
]

const totalPrice = shoppingCart.reduce((acc, item) => acc 
 + item.price, 0)

console.log(totalPrice);