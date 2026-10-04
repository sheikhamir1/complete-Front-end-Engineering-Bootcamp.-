// {
//   let msg = "hello";
//   console.log(msg);
// }
// {
//   let msg = "world";
//   console.log(msg);
// }

// let msg = "hello";
// console.log(msg);

// let msg = "world";
// console.log(msg);

// for (let i = 0; i < 3; i++) {
//   console.log(i);
// }

// console.log(i);

// Nested Functions

// function sayHi(firstname, lastname) {
//   // helper function
//   function getFullName() {
//     return `${firstname} ${lastname}`;
//   }

//   console.log("hello ," + getFullName());
//   console.log("Bye ," + getFullName());
// }

// sayHi("rohan", "ali");

// function makeCounter() {
//   let count = 0;

//   return function () {
//     return count++;
//   };
// }

// let counter = makeCounter();
// console.log(counter);
// console.log(counter()); // This is Called Closure

//A lexical environment in JavaScript is the internal structure that JavaScript uses to keep track of variables, functions, and their scope during code execution.

// let globalVar = "i am global";

// function greet() {
//   let message = "Hello";
//   console.log(message);
//   console.log(globalVar);
// }

// greet();

// let myVar = "i am Student";
// myVar = null;
// console.log(myVar);

// greet();

// function greet() {
//   console.log("hello Students");
// }

// let greet = function () {
//   console.log("hello Students");
//   // console.log(typeof name, name);
// };

// greet();

// function f() {
//   let value = 123;

//   return function () {
//     console.log(value++);
//   };
// }

// let g = f();
// g();
// g();
// g();
// g = null;

// let user = { name: "rohan" };
// let x = user;
// user = null;
// x = null;

// console.log(user);
// console.log(x);

// function f() {
//   let value = Math.random() * 100;
//   return function () {
//     console.log(value);
//   };
// }

// // 3 different functions, 3 different environments
// let arr = [f(), f(), f()];
// arr[0]();
// arr[1]();
// arr[2]();

// let value = "Surprise!";

// function f() {
//   let value = "the closest value";

//   function g() {
//     debugger; // alert(value) → "Surprise!"
//     // The inner 'value' was optimized out,
//     // so it finds the outer one!
//   }

//   return g;
// }

// console.log(value);
