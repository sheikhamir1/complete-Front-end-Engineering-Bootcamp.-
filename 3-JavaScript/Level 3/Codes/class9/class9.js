"use strict";

// let user = {
//   name: "rohan",
//   get fullName() {
//     return this.name;
//   },
// };

// console.log(user.fullName);

// Accessor Property
// get , set

// --------------------------------
// let user = {
//   firstName: "Rohan",
//   lastName: "Ali",

//   get fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },

//   set fullName(value) {
//     let part = value.split(" ");
//     this.firstName = part[0];
//     this.lastName = part[1];
//   },
// };
// user.fullName = "Aliya Khan";
// console.log(user.fullName);

// let user = {
//   _age: null,

//   get age() {
//     return this._age;
//   },

//   set age(value) {
//     if (value <= 0) {
//       console.log("Error:Age connot be Negative!");
//       return;
//     }
//     if (value > 150) {
//       console.log("Error:Age is Too high!");
//       return;
//     }
//     this._age = value;
//   },
// };
// user.age = 50;
// console.log(user.age);

// let user = {
//   firstName: "Rohan",
//   lastName: "Ali",
// };

// Object.defineProperty(user, "fullName", {
//   get() {
//     return `${this.firstName} ${this.lastName}`;
//   },
//   set(value) {
//     [this.firstName, this.lastName] = value.split(" ");
//   },
//   enumerable: true,
//   configurable: true,
// });
// user.fullName = "Aliya Sheikh";
// console.log(user.fullName);
