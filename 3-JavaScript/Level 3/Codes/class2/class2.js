//  problem

// function sum(a, b) {
//   return a + b;
// }

// let result = sum(3, 5);
// console.log(`The Total Sum:${result}`);

// function sumAll(...args) {
//   //   console.log(args);

//   let sum = 0;
//   for (let arg of args) {
//     sum += arg;
//   }
//   return sum;
// }
// let result = sumAll(5, 2, 3, 4, 3, 56, 5, 6, 5, 7, 7, 8, 78, 65, 23);
// console.log(`The Total Sum:${result}`);

// function showname(firstName, lastName, ...args) {
//   console.log(`${firstName} ${lastName}`);
//   console.log(args[0]);
//   console.log(args.length);
// }

// console.log(showname("rohan", "ali", "Rahul", "amir", "alisha"));

// function showName(a) {
//   console.log("first agrs", a);
//   console.log(arguments.length);
//   console.log(arguments[0]);
//   //   console.log(arguments[2]);
//   //   console.log(arguments[3]);

//   let x = arguments[3];
//   console.log(x);
//   console.log(typeof x);
// }

// showName("rohan", "ali", "alisha", 20);

// let user = {
//   0: "rohan",
//   1: "ali",
//   length: 2,
// };

// let user = () => {
//   console.log(arguments.length);
//   console.log(arguments[1]);
//   console.log(arguments[2]);
// };

// user("rohan", "ali", "alisha", 20);

// let arr = [3, 2, 6, 5, 4, 7, 19, 21, 24, 346];
// // let num = 5;
// // console.log(typeof arr, arr);
// // console.log(typeof num, num);

// // console.log(Math.max(3, 5, 4, 3, 32));
// console.log(Math.max(...arr));

// let arr1 = [1, -2, 3];
// let arr2 = [8, 3, -8];

// console.log(Math.max(...arr1, ...arr2));

// // Mix with normal values
// console.log(Math.max(1, ...arr1, 2, ...arr2, 25));

// Spread Use Cases
// let arr1 = [3, 2, 5, 1];
// let arr2 = [8, 9, 15];

// let merged = [0, ...arr1, 2, ...arr2];
// arr1.pop();

// console.log(arr1);
// console.log(merged);

// use with string
// let str = "rohan";

// console.log([...str]);

// let arrayLike = {
//   0: "rohan",
//   1: "ali",
//   2: 25,
//   length: 3,
// };
// console.log(arrayLike);

// let user = {
//   name: "rohan",
//   age: 24,
// };

// let arr = ["alisha", "amir", 24];
// console.log(arr);

// let realArray = Array.from(arrayLike);
// console.log(realArray);

// console.log([...arr, ...realArray]);

// console.log([...arrayLike]);
// console.log([...user]);
// console.log({ ...user, ...arrayLike });
