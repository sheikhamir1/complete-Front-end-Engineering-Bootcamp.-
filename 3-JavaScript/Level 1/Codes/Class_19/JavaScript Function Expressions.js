console.log("hello world");

// function sayHi() {
//   alert("....Hello");
// }

// // Copy the function
// let func = sayHi;

// // Both work identically
// func(); // Hello
// sayHi(); // Hello

// Function Expression
// let greet = function (name) {
//   return `Hello, ${name}!`;
// };

// // Using the function
// console.log(greet("John")); // "Hello, John!"

let age = 16;
let welcome;

if (age < 18) {
  welcome = function () {
    alert("Hello!");
  };
} else {
  welcome = function () {
    alert("Greetings!");
  };
}

welcome(); // "Hello!"
