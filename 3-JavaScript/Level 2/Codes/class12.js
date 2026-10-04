// let arr = new Array();
// let arr1 = [];
// console.log(typeof arr);
// console.log(typeof arr1);

// let fruits = ["apple", "orange", "plum"];
// let str = "apple";
// console.log(str[0]);

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits);

// fruits[2] = "pear";
// fruits[3] = "Lemon";
// console.log(fruits);
// console.log(fruits.length);
// alert(fruits);

// let arr = [
//   "apple", // string
//   { name: "rohan" }, // object
//   true, // Boolean
//   20, // Number
//   function () {
//     console.log("i am function in side Array");
//   },
// ];
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[1].name);
// console.log(arr[2]);
// console.log(arr[3]);
// // console.log(arr[4]());
// arr[4]();

// access Last index in arr
// let fruits = ["apple", "orange", "plum"];
// console.log(fruits[fruits.length - 1]);
// console.log(fruits.at(-1));

// push/pop , shift/unshift
// let fruits = ["apple", "banana", "Mongo"];
// fruits.pop();
// fruits.push("tree");

// console.log(fruits);

// fruits.shift();
// fruits.push("orange", "peach");
// fruits.unshift("pineapple", "lemon");
// console.log(fruits);

// copy By reference
// let fruit = ["banana"];
// let arr = fruit;
// console.log(arr === fruit);
// arr.push("pear");
// console.log(fruit);

// fun facts
// let fruits = [];
// fruits[9999] = 5;
// fruits.age = 25;
// console.log(fruits);

// Array Loop
// let arr = ["apple", "banana", "Mongo"];
// console.log("length of an array", arr.length);

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// for (let ar of arr) {
//   console.log(ar);
// }

// let arr = {
//   name: "rohan",
//   age: 28,
// };

// for (let key in arr) {
//   console.log(arr[key]);
// }

// let fruits = [];
// fruits[123] = "Apple";

// alert(fruits.length);

// let arr = [1, 2, 3, 4, 5, 6];
// console.log(arr.length);
// arr.length = 2;
// console.log(arr);
// arr.length = 6;
// console.log(arr);
// console.log(arr.length);
// arr.length = 0;
// console.log(arr);

// new Array
// let arr = new Array("apple", "banana", "mango");
// console.log(arr);
// let arr = new Array(4);
// console.log(arr.length);

// multidimensional Array
// let matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// console.log(matrix[1][1]);

// let cube = [
//   [
//     [1, 2, 3],
//     [4, 5, 6],
//   ],
//   [
//     [7, 8, 9],
//     [10, 11, 12],
//   ],
// ];
// console.log(cube[1][1][1]);

//tostring & array comparison
// let arr = [1, 2, 3];
// console.log(arr);
// console.log(String(arr) === "1,2,3");
// console.log([] + 1);
// console.log([1] + 1);
// console.log([1, 2] + 1);
// alert([] == []); // false
// alert([0] == [0]); // false
// alert(0 == []);
// alert("0" == []);
// alert(0 == "");
// alert("0" == "");
