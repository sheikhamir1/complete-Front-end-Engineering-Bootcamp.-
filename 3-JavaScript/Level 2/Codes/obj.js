// object creation And Properties

// let user = new Object(); // object Constructor
// let user1 = {}; // object literal

// console.log(typeof user);
// console.log(typeof user1);

// let user2 = {
//   name: "rohan",
//   age: 25,
//   city: "kolkata",
//   job: "web dev",
//   "your exp": "5 years",
// };

// let add = "city";

// console.log(user2.name);
// console.log(user2["age"]);
// console.log(user2[add]);
// console.log(user2["your exp"]);

// let fruit = prompt("which fruit to buy?");
// let bag = {
//   [fruit]: 5,
// };
// console.log(bag);
// console.log(bag[fruit]);

// function makeuser(name, age) {
//   return {
//     name,
//     age,
//   };
// }
// console.log(makeuser("amir", 26));

// let user = {
//   for: "this is for loop",
// };
// console.log(user);

//in operator

// let user = {
//   name: "rohan",
//   age: 20,
//   isadmin: true,
// };

// console.log("age" in user);
// console.log("dont" in user);

// for (let key in user) {
//   console.log("Keys", key);
//   console.log("values", user[key]);
// }

//Object References and Copying

// let a = {};
// let b = a;

// console.log(a === b);
// console.log(a === b);

//  examples of primitives
// let a = 10;
// let b = a;
// b = 20;

// console.log("value of a in primitives", a);
// console.log("value of a in primitives", b);

// let a1 = { x: 1 };
// let b1 = a1;
// b1.x = 2;

// console.log("value of a in obj", a1);
// console.log("value of b in obj", b1);

// object assign()

// let user = {
//   name: "rohan",
//   age: 24,
// };
// user.name = "alisha";
// console.log(user);

// let clone = Object.assign({}, user);
// clone.name = "amir";
// console.log(clone);

// spread syntex
// let user = {
//   name: "rohan",
//   age: 30,
// };
// user.name = "alisha";
// console.log(user);

// let clone = { ...user };
// clone.name = "amir";
// console.log(clone);

// let user = {
//   name: "rohan",
//   age: 25,
//   size: {
//     height: 180,
//     weight: 70,
//   },
// };
// let clone = { ...user };
// console.log(clone.size.height);

// structuredclone()
// let user = {
//   name: "rohan",
//   age: 25,
//   size: {
//     height: 180,
//     weight: 70,
//   },
// };

// let clone = structuredClone(user);
// console.log(clone);

// let user1 = {
//   name: "amir",
//   age: 30,
// };

// let user2 = {
//   name: "rohan",
//   age: 25,
//   size: {
//     height: 180,
//     weight: 70,
//   },
// };
// let clone = { user1, ...user2 };
// console.log(clone);
