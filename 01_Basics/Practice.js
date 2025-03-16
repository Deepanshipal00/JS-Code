// Destructuring of Array

const course = {
    courseName : "Javascript",
    price : 500,
    courseInstructor : "Hitesh",
}

// to access course.courseInstructor or any object value repeadetly we can use
const {courseInstructor : instructor} = course;
// console.log(courseInstructor); // Hitesh
console.log(instructor);

//JSON -> Javascript Object Notation -> It's not stored inside the variable, Keys and value both are in String format
/*
{
    "name" : "Deepanshi",
    "age" : 22,
    "isLoggenIn" : true
}
*/

// When we fetch data from API's we get data in JSON format which we later convert in object and access the values, also data could be in Array of Object format that can loop through and neccessary data can be accessable.
