"use strict";

// let user = {
//   id: 11,
//   name: "rohan",
//   password: "RohanSuperPass123",
//   myPi: 123456789,
// };
// console.log(user);
// Object.getOwnPropertyDescriptor()
// Step 1.
// let secretMenu = Object.getOwnPropertyDescriptor(user, "name");
// console.log(secretMenu);

// Step 2.
// Object.defineProperty(user, "id", {
//   writable: false,
// });

// let checkFlags = Object.getOwnPropertyDescriptor(user, "id");
// console.log(checkFlags);

// user.id = 1000;
// console.log(user);

//Step 3.
// Object.defineProperty(user, "password", {
//   enumerable: false,
// });
// for (key in user) {
//   console.log(`${key}:${user[key]}`);
// }

// let checkFlags = Object.getOwnPropertyDescriptor(user, "password");
// console.log(checkFlags);
// console.log(user.password);

//Step 4.
// Object.defineProperty(user, "myPi", {
//   configurable: false,
//   writable: false,
// });

// for (let key in user) {
//   console.log(`${key}:${user[key]}`);
// }

// let checkFlags = Object.getOwnPropertyDescriptor(user, "myPi");
// console.log(checkFlags);

// user.myPi = 333333;
// delete user.myPi;
// console.log(user.myPi);

// --------------------------------------------
// catch 1

// let user = {};

// Object.defineProperty(user, "name", {
//   value: "Rohan ali",
//   configurable: true,
//   writable: true,
//   enumerable: true,
// });

// user.name = "aliya";
// console.log(user);
// let checkFlags = Object.getOwnPropertyDescriptor(user, "name");
// console.log(checkFlags);

// catch 2
// always use strict mode

// catch 3
// when configurable is set to false, writable can still be true

// --------------------------------------------

let user = {};

Object.defineProperties(user, {
  name: {
    value: "Rohan",
    enumerable: true,
    configurable: true,
    writable: false,
  },
  surname: {
    value: "Ali",
    configurable: true,
    enumerable: true,
    writable: false,
  },
});

// let checkFlags = Object.getOwnPropertyDescriptors(user);
// console.log(checkFlags);
// console.log(user);

// --------------------------------------------
// let allSecret = Object.getOwnPropertyDescriptors(user);
// // console.log(allSecret);
// let perfectClone = Object.defineProperties({}, allSecret);
// console.log(perfectClone);
// // console.log(Object.getOwnPropertyDescriptors(perfectClone));

// --------------------------------------------

// Sealing Objects Globally
// level 1
// user.newProp = "I am New";
// // console.log(Object.getOwnPropertyDescriptor(user, "newProp"));
// Object.preventExtensions(user);
// user.newProp = "i am changed";
// delete user.newProp;

// user.empty = "i am new one";
// console.log(user);

// level 2
// user.empty = "i am new one";
// Object.seal(user);

// // delete user.surname;
// user.empty = "done";
// console.log(user);

// level 3
// user.empty = "i am new one";
// Object.freeze(user);
// // user.empty = "i am new one";
// // delete user.surname;
// // user.empty = "done";
// console.log(user);
