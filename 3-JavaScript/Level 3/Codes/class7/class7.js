"use strict";

// let user = {
//   name: "rohan",
//   sayHi() {
//     console.log(`Hello ${this.name}`);
//   },
// };

// // user.sayHi();
// setTimeout(user.sayHi, 1000);

// ---------------------------------------------
// Solution 1 : wrapper function
// setTimeout(function () {
//   user.sayHi();
// }, 1000);

// Solution 2 : Arrow function

// setTimeout(() => {
//   user.sayHi();
// }, 1000);

// Solution 3 : bind() function
// let newFun = user.sayHi.bind(user);
// setTimeout(newFun, 1000);

// ---------------------------------------------

// let calculator = {
//   name: "SuperCalc 3000",
//   multiply(a, b) {
//     console.log(`${this.name} calculated ${a * b}`);
//   },
// };

// setTimeout(() => {
//   calculator.multiply(5, 2);
// }, 1000);

// calculator = {
//   name: "Evilcalc",
//   multiply(a, b) {
//     console.log(`${this.name} stole your Math! Mwahaha!`);
//   },
// };
// calculator = null;

// let safeFuncation = calculator.multiply.bind(calculator, 5, 2);
// // console.log(safeFuncation);
// setTimeout(safeFuncation, 1000);

// calculator = null;

// ---------------------------------------------
// Partial Functions

// function multiply(a, b) {
//   return a * b;
// }

// let double = multiply.bind(null, 2);
// console.log(double(2));
// console.log(double(3));
// console.log(double(5));
// console.log(double(50));

// let calculator = {
//   name: "SuperCalc",
//   multiply(a, b) {
//     console.log(`${this.name} says ${a * b}`);
//   },
// };

// calculator.double = calculator.multiply.bind(null, 2);
// calculator.double(2);

// HELPER FUNCTION

// let calculator = {
//   name: "SuperCalc",
//   multiply(a, b) {
//     console.log(`${this.name} says ${a * b}`);
//   },
// };
// let calculator2 = {
//   name: "SuperCalc 2",
//   add(a, b) {
//     console.log(`${this.name} says ${a + b}`);
//   },
// };

// function createPartial(originalFunction, ...lockedArgs) {
//   // return brand new function
//   return function (...newArgs) {
//     // 1. we level 'this' Dynamic! we just pass along whatever "this" currently is
//     // 2.we put the locked arguments first
//     // 3.we put the new Arguments second
//     return originalFunction.call(this, ...lockedArgs, ...newArgs);
//   };
// }

// calculator.double = createPartial(calculator.multiply, 2);
// // console.log(calculator.double);
// calculator.double(3);

// calculator.double2 = createPartial(calculator2.add, 2);
// calculator.double2(3);

// ---------------------------------------------
// The CAllBack Prblm without ARROW

// let calculator = {
//   name: "superRohan",
//   number: [1, 2, 3, 4, 5],
//   showMath() {
//     this.number.forEach(function (num) {
//       console.log(`${this.name} Processed ${num}`);
//     });
//   },
// };

// calculator.showMath();

// let calculator = {
//   name: "superRohan",
//   number: [1, 2, 3, 4, 5],
//   showMath() {
//     this.number.forEach((num) => {
//       console.log(`${this.name} Processed ${num}`);
//     });
//   },
// };

// calculator.showMath();

// ---------------------------------------------

// 2. Arrow Function vs bind()
// Since both of these fix the this problem, what is the difference?

// .bind() is aggressive: It grabs a normal function, rips off its mirror, and permanently glues a specific object to it.

// Arrow functions are passive: They just naturally don't have a mirror. They will always look at whatever object the surrounding code is using.

// ---------------------------------------------
// 3.Arrow Have no Arguments

// function delayDecorator(originalFunction, ms) {
//   // the outer wrapper is the regular function, so it gets the "arguments"box
//   return function () {
//     // but the inner timer use an arrow function
//     setTimeout(() => {
//       // this arrow has no "this","arguments"
//       originalFunction.apply(this, arguments);
//     }, ms);
//   };
// }

// function sayHi() {
//   console.log("Hello Rohan");
// }

// let result = delayDecorator(sayHi, 1000);
// result();
