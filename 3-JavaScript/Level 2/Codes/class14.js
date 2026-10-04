// testing
// let user = {
//   name: "rohan",
//   age: 20,
// };

// for (i in user) {
//   console.log(i);
// }

// let list = [1, 2, 3, 4, 5];
// console.log(list);

// Symbol.iterator

// let playlist = {
//   songs: ["intro", "lecture", "outro"],
// };

// playlist[Symbol.iterator] = function () {
//   let index = 0; // 1,2
//   let songs = this.songs;

//   return {
//     next() {
//       if (index < songs.length) {
//         // fasle
//         return {
//           value: songs[index++], // index = 1 , 2 , 3
//           done: false,
//         };
//       } else {
//         return { done: true };
//       }
//     },
//   };
// };

// for (let song of playlist) {
//   console.log(song);
// }

// console.log(playlist);

// infinte iterables

// let counter = {
//   [Symbol.iterator]() {
//     let current = 1;
//     return {
//       next() {
//         return {
//           value: current++,
//           done: false,
//         };
//       },
//     };
//   },
// };

// for (let n of counter) {
//   if (n > 5) break;
//   console.log(n);
// }

// string
// for (let char of "rohan") {
//   console.log(char);
// }

// let str = "X😅👌";
// for (let char of str) {
//   console.log(char);
// }

// array
// let arr = {
//   0: "hello",
//   1: "world",
//   length: 2,
// };
// console.log(arr);

// for (let x of arr) {
//   console.log(x);
// }
// console.log(arr[0]);

// Array.from

// let arr2 = Array.from(arr);
// arr2.pop();
// console.log(arr2);

// let str = "X😅👌";
// let arr = Array.from(str);
// arr.pop();
// console.log(arr);

// array.form
// let range = {
//   from: 1,
//   to: 5,
//   [Symbol.iterator]() {
//     let current = this.from;
//     return {
//       next: () =>
//         current <= this.to ? { value: current++, done: false } : { done: true },
//     };
//   },
// };
// let sq = Array.from(range, (n) => n * n);
// console.log(sq);

// map
// let map = new Map();
// // console.log(map);
// map.set("1", "str1");
// map.set(1, "num1");
// map.set(true, "bool1");

// console.log(map.get(true));
// console.log(map.size);

// let user = { name: "rohan" };

// let visitCount = new Map();
// visitCount.set(user, 123).set(1, "alisha");
// console.log(visitCount.get(1));
// console.log(visitCount.get(user));

// let recipeMap = new Map([
//   ["cucumber", 500],
//   ["tomatoes", 350],
//   ["onion", 50],
// ]);

// iterate over Keys
// for (let vegetable of recipeMap.keys()) {
//   // console.log(`vegetable is :${vegetable}`);
//   // console.log(vegetable);
// }

// iterate over values
// for (let amount of recipeMap.values()) {
//   // console.log(`amount is :${amount}`);
//   // console.log(amount);
// }

// itearte over key and value
// for (let entry of recipeMap) {
//   // console.log(`entry is :${entry}`);
//   // console.log(entry);
// }

// recipeMap.forEach((value, key, map) => {
//   console.log(`${key}: ${value}`);
//   // console.log(map);
// });

// let obj = {
//   name: "rohan",
//   age: 26,
// };

// let map = new Map(Object.entries(obj));
// console.log(map.get("name"));

// let prices = Object.fromEntries([
//   ["banana", 1],
//   ["orange", 2],
//   ["meat", 4],
// ]);
// console.log(prices.orange);

// let map = new Map();
// map.set("banana", 1);
// map.set("orange", 2);
// map.set("meat", 3);

// // let obj = Object.fromEntries(map.entries());
// let obj = Object.fromEntries(map);
// console.log(obj);

// sets
// let set = new Set();

// let rohan = { name: "rohan" };
// let alisha = { name: "alisha" };
// let rahul = { name: "rahul" };
// let Amir = { name: "Amir" };

// set.add(rohan);
// set.add(Amir);
// set.add(alisha);
// set.add(rahul);
// set.add(alisha);
// set.add(Amir);

// // console.log(set.size);
// for (let user of set) {
//   console.log(user.name);
// }

//iterate
// let set = new Set(["orangers", "apples", "bananas"]);
// // for (let value of set) {
// //   console.log(value);
// // }

// set.forEach((value, valueAgain, set) => {
//   console.log(value);
// });

// converting between set and Array
// let arr = [1, 2, 3, 4, 5];
// let set = new Set(arr);

// let set = new Set([1, 2, 3, 4, 5]);
// let arr = Array.from(set);

// console.log(set);
// console.log(arr);

// let number = [1, 2, 3, 4, 5, 4, 3, 2];
// let uniqueNumbers = new Set(number);
// // console.log(uniqueNumbers);
// let uniqueArray = Array.from(uniqueNumbers);
// console.log(uniqueArray);

// function hasuniqueArray(arr) {
//   return arr.length === new Set(arr).size;
// }
// console.log(hasuniqueArray([1, 2, 3, 4, 5, 4, 3, 2]));
// console.log(hasuniqueArray([1, 2, 3, 4, 5]));

// function union(set1, set2) {
//   return new Set([...set1, ...set2]);
// }

// function intersection(set1, set2) {
//   return new Set([...set1].filter((x) => set2.has(x)));
// }

// function difference(set1, set2) {
//   return new Set([...set1].filter((x) => !set2.has(x)));
// }

// let set1 = new Set([1, 2, 3, 4]);
// let set2 = new Set([3, 4, 5, 6]);

// console.log(union(set1, set2));
// console.log(intersection(set1, set2));
// console.log(difference(set1, set2));
