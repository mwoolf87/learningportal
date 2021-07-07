//console.log prints to the terminal
// console.log("My name is Mike");

// String Type: These are doing to be your letters, and sentences, etc.

// let name = "Mike Woolf";
// console.log(name);
//--------------------------------------------
// Number Type: These are numbers, double precision

// let magicNumber = 32;
// console.log(magicNumber);
//--------------------------------------------
//Boolean Type: These are true/false values

// let done = false;
// console.log(done);
//--------------------------------------------
// Null Type: Null means that nothing is being stored at a particular memory location
//----------------------Variables----------------------
// Let declares a variable that can be reassigned.

// const declares a variable that can NOT be assigned
//--------------------Equality------------------------

/*Assignment(=) is the process of storing a value within the variable
Comparison(==) determines if the value is on the left side is equivalent to the value of the right side */

// let myHome = "Atlanta";
// let vacation = "San Diego";
// console.log(myHome == vacation); // returns false;

//--------------------OBJECTS------------------------
// Objects are a compilation of variables that define a thing

// let cat = {
//   breed: "tabby",
//   color: "orange",
//   age: 5,
//   isBlind: false
// };

// console.log(cat); // returns the whole cat object
// console.log(cat.breed); // returns the value "tabby" in this case
//-------------------ARRAYS---------------------------
// Arrays are a data structure that stores information in continuous memory, their index begins at zero and are by default static

// let carModels = ["Ford", "Chevy", "GM", "BMW"];
// console.log(carModels);
// console.log(carModels[3]); // returns BMW

// const arr = [
//   (cat = {
//     color: "orange",
//     legs: 4
//   }),
//   (dog = {
//     color: "brown",
//     legs: 4
//   }),
//   (bird = {
//     color: "red",
//     legs: 2
//   })
// ];

// console.log(arr[1].color);

//-----------------------LOOPS-------------------
//Without iterators, we would have to print each index in an array individually
let students = ["Bill", "Rose", "Steve"];
// console.log(students[0]);
// console.log(students[1]);
// console.log(students[2]);

// ---- For Loop -------
// 1. Starting point
// 2. Breakout Condition
// 3. Increment/Decrement -- i = i + 1 === i++
// for (let i = 0; i < students.length; i++) {
//   // i keeps track of the index we are currently on.
//   console.log(students[i]);
// }

// Reverse and array using a for loop
// for (let i = students.length - 1; i >= 0; i--) {
//   console.log(students[i]);
// }

// ---- While Loop -----
// let i = 0;
// while (i < students.length) {
//   console.log(students[i]);
//   i++;
// }

// ------------------- FUNCTIONS ----------------------
// Q: What are functions?
// A: Functions are snippets of code that are meant to be reused

// Function signature is the combination of the name and parameters of that function
// 1. Name it
// 2. Provide the parameters (parameters are variables needed for the function to operate)
// Scope - Any variable declared within a block(functions,loops, etc.) only exists within that block
// function calcDiameter(radius) {
//   return radius * 2;
// }

// let diameter = calcDiameter(10);
// console.log(diameter);

// Q: Why do we need functions?
// A: They reduce the amount of code that needs to be written
//---------------------------------------------------------

// ------------------------ HOMEWORK ---------------------------

// 1) In defining a for loop, what are the three expressions you need?
// 1. Starting point
// 2. Breakout Condition
// 3. Increment/Decrement -- i = i + 1 === i++

// 2) When would you use a while loop over a for loop?
// When you want more control over what you're coding

// 3) Write a program to add all the numbers given in an array. for example input array [10,20,3,30,40,50]
// const nums = [10, 20, 3, 30, 40, 50];
// for(let i = 0; i < nums.length; i++){

// }
// let count = 0;
// for (i in nums) {
//   count = count + nums[i];
// }

// 4) What is a function and explain the advantages of writing a function
// A function is reusable pieces of code and that doubles as its advantage

// 5) Rewrite the program 3) and move the code to a function and call the function for different input arrays
// const reduceArr = arr => {
//   return arr.reduce((a, b) => a + b, 0);
// };

// console.log(reduceArr([10, 20, 3, 30, 40, 50]));
const sumArray = (arr, sum = 0) => {
  //   let sum = 0;
  for (i in arr) {
    sum += arr[i];
  }
  return sum;
};

console.log(sumArray([10, 20, 3, 30, 40, 50], 15));
console.log(sumArray([10, 20, 3, 30, 40, 50]));

// 6) You are writing a program to simulate a stair-case.
// 	Write a function which takes two parameters 1) 'n' - the number of steps in the stair-case 2) 'j' - the number of steps to jump
// 	Start from step 1 and depending on the value of 'n' simulate the jump
// 	the program should print the following
// 		a) 'Total number of steps in stair-case = n'
// 		b) 'Jump value = j'
// 		c) 'Total jumps to reach the end = t'

// 		Note: n,j,t will be the actual values

// function steps(n, j) {
//   let t = 0;
//   for (let i = 1; i <= n; i += j) {
//     t++;
//   }
//   return t;
// }

// console.log(steps(10, 1));

// ------------------ CONDITIONALS ---------------------------
//conditionals are blocks of code that are only executed if a certain condition evaluates to true.
// let score = 0;
// =; assignment, storing a value within a variable
// ==; compares two values and determines if they're equivalent
// ===; compares the type and the value of the condition and evaluates if they are true
// if (score == 0) {
//   console.log("no points have been scored");
// } else if (score > 0 && score < 10) {
//   console.log("keep playing!");
// } else {
//   console.log("the game is over");
// }

// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < nums.length; i++) {
//   if (i % 2 !== 0) {
//     console.log(nums[i]);
//   }
// }

// function calcDiameter(radius) {
//   if (typeof radius == "number") {
//     return radius * 2;
//   } else {
//     return 0;
//   }
// }

// let diameter = calcDiameter(15);
// console.log(diameter);

// const weather = deg => {
//   if (typeof deg === "number") {
//     return `It's currently ${deg} degrees outside!`;
//   } else {
//     return `Please enter a the temp in a number format`;
//   }
// };

// console.log(weather(82));

// function calcDiameter(radius) {
//   if (typeof radius === "number") {
//     return radius * 2;
//   } else {
//     return 0;
//   }
// }

// const calcCircumference = radius => {
//   const pi = 3.14;
//   return calcDiameter(radius / 2) * pi * 2;
// };

// console.log(calcCircumference(5));
