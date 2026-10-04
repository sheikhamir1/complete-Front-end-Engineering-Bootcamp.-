// Destructuring Array
// let arr = ["rohan", "ali"];
// // // let firstName = arr[0];
// // // let lastName = arr[1];
// // // console.log(firstName, lastName);
// let [firstName, lastName] = arr;
// console.log(firstName, lastName);

// combining with srting method
// let [firstName, lastName] = "Rohan ali".split(" ");
// console.log(firstName, lastName);

// let x = "amir sohail sheikh";
// console.log(x.split(" "));

// advanced destructuring
// let [friend1, , friend2] = ["rohan", "amir", "alisha", "we are friend"];
// console.log(friend1, friend2);

// works with any iterable
// let [a, b, c] = "abc";
// let [one, two, three] = new Set([1, 2, 3]);
// console.log(one, two, three);

// looping
// let user = {
//   name: "rohan",
//   age: 25,
//   city: "kolkata",
// };

// // let [one, two] = user;
// // console.log(one, two);

// // for (let i of user) {
// //   console.log(i);
// // }

// // let x = Object.entries(user);
// // // console.log(x);
// // let [name, age] = x;
// // console.log(name, age);

// for (let [key, value] of Object.entries(user)) {
//   //   console.log(`The Name is: ${name} And The Age is: ${age}`);
//   console.log(key, value);
// }

// array Destructuing Technique

// let guest = "rohan";
// let admin = "aliya";
// // console.log(guest);

// [guest, admin] = [admin, guest];

// console.log(admin);

// The Rest ...
// let [...rest] = ["rohan", "amir", "alisha", "we are friends"];
// console.log(rest[3]);

// default value
// let [name = "Guest", lastName = "Anonymous"] = ["rohan", "ali"];
// console.log(name, lastName);

// Object Destructuring
// let user = {
//   name: "rohan",
//   age: 30,
//   city: "delhi",
// };
// let { city, age, name } = user;
// console.log(name, age, city);
// console.log(a, b, c);

// Mapping Properties to variables
// let user = {
//   name: "rohan",
//   age: 30,
//   city: "delhi",
// };
// let { name: naam, age: umar, city: shaher } = user;
// console.log(naam, umar, shaher);

// let option = {
//   title: "menu",
//   width: 300,
//   height: 500,
// };

// let { width = 100, height = 200, title } = option;
// console.log(title);
// console.log(width);
// console.log(height);

// let option = {
//   title: "menu",
//   width: 300,
//   height: 500,
// };

// let { title, ...rest } = option;
// console.log(title);
// console.log(rest);

// let title, width, height;

// ({ title, width, height } = { title: "menu", width: 200, height: 100 });
// console.log(title, width, height);

// nested Destructuring

// let option = {
//   size: {
//     width: 100,
//     height: 200,
//   },
//   item: ["cake", "donut"],
//   extra: true,
// };
// let {
//   size: { width, height },
//   item: [item1, item2],
//   title = "Menu",
// } = option;

// console.log(title);
// console.log(width, height);
// console.log(item1, item2);

// let options = {
//   title: "My Menu",
//     items: ["item1", "item2"],
// };

// function showMenu({
//   title = "untitled",
//   width = 200,
//   height = 100,
//   items = [],
// }) {
//   console.log(`${title} ${width} ${height}`);
//   console.log(items);
// }
// showMenu();

// function showMenu({ title = "untitled", width = 200, height = 100 } = {}) {
//   console.log(`${title} ${width} ${height}`);
// }
// showMenu();
