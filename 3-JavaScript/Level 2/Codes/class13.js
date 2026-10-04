// splice

// let arr = ["I", "go", "home"];
// delete arr[1];

// console.log(arr);
// console.log(arr.length);
// arr.splice(start[,deleteCount , el1, el2..])
// arr.splice(1, 1);
// console.log(arr);
// console.log(arr.length);

//Adding With Splice

// let arr = ["i", "study", "Javascript", "right", "now"];
// let removed = arr.splice(0, 3);
// removed.splice(3, 0, "Complex", "Language");
// console.log(removed);

// negative Indexes
// let arr = [1, 2, 5];

// Selecting Index In our Case Its form End - 1
// Zero = Nothing Deleted
// 3, 4 = Adding New Element into Array

// arr.splice(-1, 0, 3, 4);
// console.log(arr);

// slice | arr.slice([start],[end]) | return New Arr
// let arr = ["t", "e", "s", "t"];
// arr.slice(1, 3);
// let test = arr.slice();
// console.log(test);
// console.log(arr);

// concat arr.concat(agr1,agr2)
// let arr = [1, 2];

// //create arr form arr And [3,4]
// console.log(arr.concat([3, 4]));

// // create new arry from arr and [3,4] and [5,6]
// console.log(arr.concat([3, 4], [5, 6]));

// let arr = [1, 2];

// let arraylike = {
//   0: "something",
//   1: "else",
//   [Symbol.isConcatSpreadable]: true,
//   length: 2,
// };
// console.log(arr.concat(arraylike));

// iterate -> foreach Loop

// arr.forEach(function (item, index, array) {
//   // Jo marzi
// });

// ["rohan", "alisha", "sahil"].forEach((item, index, array) => {
//   console.log(`${item} is At index ${index} in ${array}`);
// });

// let price = [120, 80, 45, 155];
// let total = 0;

// price.forEach(function (price) {
//   total = total + price;
// });
// console.log(total);

// let user = ["alisha", "omar", "zayd", "fatima"];

// user.forEach(function (name) {
//   console.log("user: ", name);
// });

// let employees = [
//   { name: "alisha", salary: 50000 },
//   { name: "Omar", salary: 60000 },
//   { name: "rohan", salary: 70000 },
// ];

// let totalAfterTax = 0;
// const taxRate = 0.1; // 10%

// employees.forEach((emp) => {
//   const tax = emp.salary * taxRate;
//   const salaryAfterTax = emp.salary - tax;
//   totalAfterTax += salaryAfterTax;
// });

// console.log(totalAfterTax);

// try {
//   [1, 2, 3, 4, 5].forEach((item) => {
//     if (item === 3) {
//       throw new Error("Found 3!");
//     }
//     console.log(item);
//   });
// } catch (error) {
//   console.log(error.message);
// }

// searching in Array
// let arr = [1, 0, false];

// its uses strict Equality ===
// console.log(arr.indexOf(0));
// console.log(arr.indexOf(false));
// console.log(arr.indexOf(null));

// includes
// console.log(arr.includes(1));

// let frute = ["apple", "banana", "orange", "apple"];
// console.log(frute.indexOf("apple"));
// console.log(frute.lastIndexOf("apple"));

// const arr = [NaN];

// console.log(arr.indexOf(NaN));
// console.log(arr.includes(NaN));

// find Method
// let employees = [
//   { name: "alisha", id: 1, age: 25, city: "delhi" },
//   { name: "Omar", id: 2, age: 25, city: "delhi" },
//   { name: "rohan", id: 3, age: 25, city: "delhi" },
// ];

// let user = employees.find((item) => item.id == 1);
// console.log(user);

// fliter Method
// let users = [
//   { id: 1, name: "John" },
//   { id: 2, name: "Pete" },
//   { id: 3, name: "Mary" },
//   { id: 4, name: "John" },
//   { id: 5, name: "Pete" },
//   { id: 6, name: "Mary" },
//   { id: 7, name: "John" },
//   { id: 8, name: "Pete" },
//   { id: 9, name: "Mary" },
// ];

// let someUsers = users.filter((item) => item.id <= 5);
// console.log(someUsers);

// chaining filter with other methods
// let users = [
//   { id: 1, name: "John", age: 20 },
//   { id: 2, name: "Pete", age: 25 },
//   { id: 3, name: "Mary", age: 30 },
// ];

// let youngUsers = users.filter((user) => user.age < 30).map((user) => user.name);

// console.log(youngUsers);

//map method
// let length = ["rohan", "alisha", "rahul"].map((item) => item.length);
// console.log(length);

// let arr = ["rohan", "alisha", "rahul"];
// console.log(arr.length);
// let user = "rohan";
// console.log(user.length);

// sort method
// let arr = [1, 2, 6, 3];
// let arr = [1, 15, 2];
// arr.sort();
// alert(arr);
// console.log(arr);

// function compare(a, b) {
//   if (a > b) return 1;
//   if (a == b) return 0;
//   if (a < b) return -1;
// }

// let arr = [1, 15, 2];
// arr.sort(compare);
// alert(arr);
// console.log(arr);

// revers array method
// let arr = [1, 2, 3, 4, 5];
// arr.reverse();
// console.log(arr);

// split and join
// let user = "rohan, alisha, rahul";

// let arr = user.split(", ");
// let arr = user.split(", ", 2);
// console.log(arr);
// for (let name of arr) {
//   console.log(`A message to ${name}`);
// }

// let str = "rohan";
// console.log(str.split(""));

// join
// let arr = ["rohan", "alisha", "rahul"];

// let str = arr.join(";");
// console.log(str);
// console.log(typeof str);

// example
// const csv = "name,age,city\nJohn,30,New York\nJane,25,Los Angeles";

// // Split into lines
// const lines = csv.split("\n");
// // console.log(lines);

// // Process each line
// const data = lines.map((line) => {
//   // Split each line into values
//   const values = line.split(",");
//   //   console.log(values);

//   // Return an object with named properties
//   return {
//     name: values[0],
//     age: parseInt(values[1]),
//     city: values[2],
//   };
// });

// // alert(JSON.stringify(data, null, 2));
// // console.log(data);

// console.log(JSON.stringify(data, null, 2));

// /*
// [
//   { "name": "name", "age": NaN, "city": "age" },
//   { "name": "John", "age": 30, "city": "New York" },
//   { "name": "Jane", "age": 25, "city": "Los Angeles" }
// ]
// */

// reduce
// let arr = [1, 2, 3, 4, 5];
// let result = arr.reduce((sum, current) => sum + current, 0);
// console.log(result);

// const nested = [[1, 2], [3, 4], [5]];
// const flat = nested.reduce((acc, cur) => acc.concat(cur), []);
// console.log(flat);
// const fruits = ["apple", "banana", "orange", "apple", "banana"];

// const count = fruits.reduce((acc, fruit) => {
//   acc[fruit] = (acc[fruit] || 0) + 1;
//   return acc;
// }, {});
// console.log(count);

// Array.isArray And thisArg

// console.log(Array.isArray({}));
// console.log(Array.isArray([]));

// let army = {
//   minAge: 18,
//   maxage: 27,
//   canJoin(user) {
//     return user.age >= this.minAge && user.age < this.maxage;
//   },
// };

// let user = [{ age: 16 }, { age: 20 }, { age: 25 }, { age: 30 }];

// // find users for who army canjoin
// let soldiers = user.filter(army.canJoin, army);
// console.log(soldiers.length);
// console.log(soldiers[0].age);
// console.log(soldiers[1].age);
