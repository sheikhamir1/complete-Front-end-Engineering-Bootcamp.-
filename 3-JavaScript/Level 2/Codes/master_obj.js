"use strict";

// let user = {
//   name: "rohan",
//   age: 20,
//   hi: function () {
//     return "hey there";
//   },
// };

// user.sayHi = function () {
//   //   console.log("hello");
//   return "hello";
// };

// console.log(user.hi());
// console.log(user.sayHi());

// pre - declared function

// let user = {
//   // empty
// };
// // first declare
// function sayHi() {
//   console.log("my fun");
// }
// // then add as a method
// user.fun = sayHi;
// console.log(user);
// user.fun();

// let user = {
//   say: function () {
//     console.log("hello");
//   },
// };
// user.say();
// console.log("user", user);

// let user1 = {
//   say() {
//     console.log("hi");
//   },
// };
// user1.say();
// console.log("user1", user);

// let user = {
//   name: "rohan",
//   age: 26,
//   greet: function () {
//     // return `hello ${this.name}`;
//     return `hello ${user.name}`;
//   },
// };

// console.log(user.greet());

// let user = {
//   name: "rohan",
//   age: 30,
//   say() {
//     console.log(this.name);
//   },
// };
// user.say();

// let amdin = user;
// user = null;
// console.log(amdin.age);

// amdin.say();

// let user = { name: "rohan" };
// let admin = { name: "admin" };

// function say() {
//   console.log(new.target);

//   console.log(this.name);
// }
// // use the same function in two obj
// user.f = say;
// admin.f = say;

// console.log(user.name);
// console.log(admin.name);
// say();

// let user = {
//   firstName: "aliya",
//   //   sayHi: () => {
//   //     console.log(this.firstName);
//   //   },
//   hi() {
//     let arrowFun = () => {
//       console.log(this.firstName);
//     };
//     arrowFun();
//   },
// };
// // user.sayHi();
// user.hi();

// function User(name) {
//   //   console.log(new.target);
//   this.name = name;
//   this.isAdmin = false;
// }

// let user1 = new User("rohan");
// console.log(user1);

// function Fun(name, age) {
//   this.name = name;
//   this.age = age;
//   this.greet = function () {
//     // console.log("hello " + this.name);
//     return `hello ${this.name}`;
//   };
// }
// let user1 = new Fun("rohan", 25);
// console.log(user1);
// console.log(user1.greet());

// optional chaining

// let user = {
//   name: "rohan",
//   age: 30,
//   //   detail: {
//   //     firstName: "rohan",
//   //     lastName: "ali",
//   //   },
// };
// // console.log(user.detail ? user.detail.firstName : undefined);

// console.log(user.detail?.firstName);

// let user = null;
// let x = 0;

// user?.sayHi(x++);
// console.log(x);

// let userAdmin = {
//   admin() {
//     console.log("i am admin");
//   },
// }
// let userGuest = {};
// userAdmin.admin?.();
// userGuest.admin?.();

// let key = "firstName";
// let user1 = {
//   firstName: "rohan",
// };

// let user2 = null;

// console.log(user1?.[key]);
// console.log(user2?.[key]);

// symbols unique identifier

// let id = Symbol("name");
// let id2 = Symbol("name");

// console.log(id.description);
// alert(id.description);
// alert(id.toString());

// hidden properties
// let user = {
//   name: "rohan",
// };
// let id = Symbol("id");
// user[id] = 1;
// console.log(user[id]);

// symbols in loop
// let id = Symbol("id");

// let user = {
//   name: "Rohan",
//   age: 30,
//   [id]: 123,
// };

// for (let key in user) {
//   console.log(key);
// }
// console.log(`Direct my Value: ${user[id]}`);

// // let clone = Object.assign({}, user);
// let clone = { ...user };
// console.log(`This is Clone: ${clone[id]}`);

// read form the global registry
// let id = Symbol.for("id");

// // reading same symbol
// let idAgain = Symbol.for("id");
// console.log(id === idAgain);

// let s = Symbol.for("name");
// let s2 = Symbol.for("id");

// get the name by symbol
// console.log(Symbol.keyFor(s));
// console.log(Symbol.keyFor(s2));

// Symbol to primitive
// let user = {
//   name: "rohan",
//   money: 1000,
//   [Symbol.toPrimitive](hint) {
//     console.log(`Hint: ${hint}`);
//     return hint == "string" ? `{name: "${this.name}"}` : this.money;
//   },
// };

// conversion Demo
// alert(user);
// alert(+user);
// alert(user + 500);
// console.log("first", user); // hint -> string = rohan
// console.log("second", +user); // hint -> Number = 1000
// console.log("third", user + 500); // hint -> default = 1500

// let user = {
//   name: "rohan",
// };
// alert(user);
// alert(user.valueOf() === user);

// let user = {
//   name: "rohan",
//   money: 1000,
//   // for hint -> string
//   toString() {
//     return `name: "${this.name}"`;
//   },
//   // for hint -> number / default
//   valueOf() {
//     return this.money;
//   },
// };
// alert(user);
// alert(+user);
// alert(user + 500);
