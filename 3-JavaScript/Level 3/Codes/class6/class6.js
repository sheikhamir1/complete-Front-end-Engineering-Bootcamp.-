"use strict";

// function multiply(a, b) {
//   return a * b;
// }
// function add(a, b) {
//   return a + b;
// }

const calculator = {
  name: "user1",
  multiply(a, b) {
    console.log("this =", this.name);
    return a * b;
  },

  add(...number) {
    name: ("user2", console.log("this =", this.name));
    return number.reduce((acc, n) => acc + n, 0);
  },
};

// console.log(multiply(5, 2));

function addLogging(originalFunction) {
  // new Function
  return function (...args) {
    console.log("calculating...");
    return originalFunction.apply(this, args);
  };
}

calculator.loggedMultiply = addLogging(calculator.multiply);
calculator.loggedAdd = addLogging(calculator.add);

console.log(calculator.loggedMultiply(5, 2));
console.log(calculator.loggedAdd(5, 2, 3, 4, 5, 6, 2, 34, 5, 7, 8));

// console.log(calculator);

// ----------------------------------------------

// higher order Function
// if accepts another function as Argument
// if return another function as result

// function sayHi() {
//   console.log("hello");
// }

// setTimeout(sayHi, 2000);

// ----------------------------------------------

// The THIS problem

// let player1 = {
//   name: "mario",
//   jump: function () {
//     console.log(this.name + " jump high!");
//   },
// };

// function sayHi() {
//   console.log(`Hello ${this.name}`);
// }

// player1.sayHi = sayHi;

// player1.sayHi();
// player1.jump();

// let player2 = {
//   name: "Nobita",
//   run: function () {
//     console.log(this.name + " Runs!");
//   },
// };
// player2.run();
// let standalone = player2.run;
// // console.log(standalone);
// standalone();

// ----------------------------------------------

// let player3 = {
//   name: "rohan",
// };
// function attack() {
//   console.log(this.name + " fire!");
// }

// // player3.attack = attack;
// attack.call(player3);

// console.log(player3);

// function introduce(greeting, punctuation) {
//   console.log(`${greeting} ${this.name}${punctuation}`);
// }

// let user = {
//   name: "Rohan",
// };

// introduce.call(user, "Hello", "!");
// introduce.apply(user, ["Hey", "!"]);

// console.log(user);
