// Q1 - Given an array of numbers, use the map function with an arrow function to square each element of the array.

// var arr=[1,2,3,4,5];
// const squared_arr = arr.map(i => i*i);
// console.log(squared_arr);


// Q2 - Write a JavaScript function that takes a student's score as a parameter and returns their grade (A, B, C, D, or F) using a series of ternary operators.

// function grader(score){
//     var grade;
//     (score<90) ? ((score<80) ? ((score<70) ? ((score<60) ? (grade='F'):(grade='D')):(grade='C')):(grade='B')):(grade='A');
//     return grade;
// }
// console.log(grader(55));


// Q3 - Create an object representing a car with properties like Company name, model, and year. Write a function to change the car's year property. Also use object destructuring to extract and print the car's Model and Year.

// const car = {company: "BMW", model: "i5", year: "2022"}
// function updateYear(car, yr){
//     car.year = yr;
//     console.log("Car:");
//     console.log("Company Name:" + car.company);
//     console.log("Model Name:" + car.model);
//     console.log("Year:" + car.year);
// }
// updateYear(car, 2024);

// Q4 - Given an array of numbers, use the filter function to create a new array containing only the prime numbers.

// var numbers = [1,3,4,5,7,9,10,11];
// const prime = numbers.filter((num)=>{
//     if (num <= 1) return false;
//     if (num <= 3) return true;
//     if (num % 2 === 0 || num % 3 === 0) return false; 

//     for (let i = 5; i * i <= num; i += 6) {
//         if (num % i === 0 || num % (i + 2) === 0) return false;
//     }
//     return true;
// });
// console.log(prime);

// Q5 -  State different use cases of map, filter and reduce functions.

// const numbers = [1, 2, 3, 4, 5];
// // Map: Creates a new array by applying a given function to each element of the original array.
// const squares = numbers.map(num => num * num);
// console.log(squares);
// // Filter: Creates a new array with all elements that pass the test implemented by the provided function.
// const evens = numbers.filter(num => num % 2 === 0);
// console.log(evens);
// // Reduce: Executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
// const sum = numbers.reduce((accumulator, num) => accumulator + num, 0);
// console.log(sum);


// Q6 - Write an asynchronous function using async-await  to fetch data from an API (you can use the JSONPlaceholder API) and log the result.

// async function fetchData() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//         const data = await response.json();
//         console.log(data);
//     } 
//     catch(error) {
//         console.error('Operation Terminated:', error);
//     }
// }
// fetchData();


// Q7 - Define a nested object representing a person with properties like name, address, and contact. Use optional chaining to safely access the person's phone number, even if the contact property is missing.

// const person = {
//     name: "John Doe",
//     address: {
//         street: "123 Main St",
//         city: "A",
//         zip: "12345"
//     },
//     // contact: "1234512345"
// };
// const ph = person.contact ?? "No Phone number available";

// console.log(ph);