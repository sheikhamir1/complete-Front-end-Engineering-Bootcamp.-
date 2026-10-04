// function name(params) {
//   console.log(params);
// }

// name("rohan");

// let sum = new Function("a", "b", "return a + b");
// console.log(sum(2, 3));

// let sum = function (a, b) {
//   return a + b;
// };

// let hello = new Function('alert("hello")');
// hello();

// // The string we fetched from a database
// let formulaFromServer = "return x * y + z";

// // Turning the string into a real function
// let calculateMath = new Function("x", "y", "z", formulaFromServer);

// // Running the function
// console.log(calculateMath(2, 5, 10)); // Output: 20

// -------------------------------

// function getFunc() {
//   let value = "myValue";
//   let func = function () {
//     console.log(value);
//   };
//   return func;
// }

// let result = getFunc();
// result();
// getFunc()();

// function getFunc() {
//   let value = "myValue";
//   let func = new Function("value", "console.log(value)");
//   return () => func(value);
// }

// getFunc()();

// ----------------------------------------------

// function sayHi() {
//   console.log("hi");
// }
// setTimeout(sayHi, 1000);

// function sayHi(greet, person) {
//   console.log(`${greet}, ${person}`);
// }

// let setId = setTimeout(sayHi, 4000, "Hello", "Rohan");
// console.log("id", setId);

// let timerId = setTimeout(func|code, [delay], [arg1], [arg2], ...)

// ----------------------------------------------

// let timeId = setTimeout(() => console.log("I am running"), 1000);

// function sayHi() {
//   console.log("hi");
// }
// let setId = setTimeout(sayHi, 1000);

// clearTimeout(setId);

// ----------------------------------------------------

// function sayHi() {
//   console.log("hello");
// }

// function sayHi(greet, person) {
//   console.log(`${greet}, ${person}`);
// }

// let setId = setInterval(sayHi, 1000, "hello", "rohan");

// setTimeout(() => {
//   clearInterval(setId);
//   console.log("stop");
// }, 5000);

// ------------------------------------------------
// function tick() {
//   console.log("tick");
// }

// let setTimeId = setTimeout(function tick() {
//   console.log("tick");
//   setTimeId = setTimeout(tick, 2000);
// }, 2000);
// setInterval: delay is from START to START

// setTimeout(() => alert("World"));

// alert("Hello");
