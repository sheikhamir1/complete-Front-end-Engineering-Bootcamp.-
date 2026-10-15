// Extending Built-in Classes

// class NumberList extends Array {
//   calculateSum() {
//     return this.reduce((total, num) => total + num, 0);
//   }
// }

// let myNumber = new NumberList(10, 20, 30, 40);
// console.log(myNumber.calculateSum());
// console.log(myNumber);

// let highNumber = myNumber.filter((n) => n > 15);
// console.log(highNumber.calculateSum());
// console.log(highNumber);
// ------------------------------------------

// Symbol.species
// class NumberList extends Array {
//   calculateSum() {
//     return this.reduce((total, num) => total + num, 0);
//   }

//   static get [Symbol.species]() {
//     return Array;
//   }
// }

// let myNumber = new NumberList(10, 20, 30, 40);
// console.log(myNumber);
// console.log(myNumber.calculateSum());

// let highNumber = myNumber.filter((n) => n > 15);
// console.log(highNumber);

// console.log(highNumber.calculateSum());

// console.log(highNumber instanceof Array);
// console.log(highNumber instanceof NumberList);
// console.log(myNumber instanceof Array);
// console.log(myNumber instanceof NumberList);

// ------------------------------------------

// class UIComponent {}
// class Button extends UIComponent {}

// let submitBtn = new Button();
// console.log(submitBtn);

// let plainObj = {};
// console.log(plainObj instanceof Button);

// -----------------------------------------

// class ServerRequest {
//   static [Symbol.hasInstance](objectToCheck) {
//     // console.log(objectToCheck);

//     if (objectToCheck.url && objectToCheck.method) {
//       return true;
//     }
//     return false;
//   }
// }

// let rawData = {
//   url: "/api/users",
//   method: "GET",
// };

// console.log(rawData instanceof ServerRequest);

// console.log(typeof "hello");
// console.log(typeof 10);
// console.log(typeof true);
// console.log(typeof null);
// console.log(typeof []);
// console.log(typeof /abc/);
// console.log(typeof new Date());

// console.log(Object.prototype.toString.call(/abc/));
// let arry = [];
// console.log(Object.prototype.toString.call(null));

// --------------------------------------------

// class DataBaseConnection {
//   get [Symbol.toStringTag]() {
//     return "DBConnection";
//   }
// }

// let conn = new DataBaseConnection();
// console.log(conn);
// console.log(Object.prototype.toString.call(conn));

// --------------------------------------------

// const loginMixin = {
//   login() {
//     console.log(`${this.name} logged in`);
//   },
// };

// class User {
//   constructor(name) {
//     this.name = name;
//   }
// }

// class Admin {
//   constructor(name) {
//     this.name = name;
//   }
// }

// class Moderator {
//   constructor(name) {
//     this.name = name;
//   }
// }

// class Teacher {
//   constructor(name) {
//     this.name = name;
//   }
// }

// // Add login() to all classes
// Object.assign(User.prototype, loginMixin);
// Object.assign(Admin.prototype, loginMixin);
// Object.assign(Moderator.prototype, loginMixin);
// Object.assign(Teacher.prototype, loginMixin);

// // // Create objects
// const user = new User("Ali");
// const admin = new Admin("Ahmed");
// const mod = new Moderator("Umar");
// const teacher = new Teacher("Fatima");

// // // All can use login()
// user.login();
// admin.login();
// mod.login();
// teacher.login();
