//Dates

let myDate = new Date();
console.log(myDate); // 2025-03-10T18:18:25.882Z
console.log(typeof myDate); // object
console.log(myDate.toString()); // Mon Mar 10 2025 18:21:31 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()); // Mon Mar 10 2025
console.log(myDate.toISOString()); // 2025-03-10T18:23:50.112Z 
// ISO Standerd and its format is  YYYY-MM-DDTHH:mm:ss.sssZ.
console.log(myDate.toJSON()); //2025-03-10T18:26:15.677Z
console.log(myDate.toLocaleDateString());  // 3/10/2025 MM/DD/YYYY
console.log(myDate.toLocaleString());  // 3/10/2025, 6:28:28 PM
console.log(myDate.toLocaleTimeString()); // 6:29:21 PM
console.log(myDate.toString()); // Mon Mar 10 2025 18:30:27 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toTimeString()); // 18:31:45 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toUTCString());  // Mon, 10 Mar 2025 18:31:45 GMT

let myCreatedDate = new Date(2023, 0, 23, 5, 3, 22); // YYYY, MM, DD, HH, MM, SS
console.log(myCreatedDate); // 2023-01-23T00:00:00.000Z
console.log(myCreatedDate.toLocaleString()); // 1/23/2023, 5:03:22 AM
let CreatedDate1 = new Date("2024-01-23"); // YYYY-MM-DD or MM-DD-YYYY
console.log(CreatedDate1.toLocaleString());  // 1/23/2024, 12:00:00 AM


let myTimestamp = Date.now();
console.log(myTimestamp); // 1741632975310 (milliseconds)
console.log(Math.floor(myTimestamp/1000)) //Convert it into seconds

let newDate = new Date();
console.log(newDate); // 2025-03-10T19:04:47.841Z
console.log(newDate.getDay()); // 1 (Tuesday) {0-6} 0-Monday
console.log(newDate.getFullYear()); // 2025

//We can do more customization in localstring format 

newDate.toLocaleString('default',{
    weekday: "long",
    dateStyle: "full"
})