// let john = { name: "john" };
// john = null;
// console.log(john.name);

// let john = { name: "john" };
// let arr = [john];
// john = null;
// console.log(arr[0]);
// console.log(john.name);

// let rohan = { name: "rohan" };

// let map = new Map();
// map.set(rohan, "aaa");
// rohan = null;
// // console.log(map.keys(rohan));
// console.log(rohan.name);

// weakMap
// let weakMap = new WeakMap();
// let obj = {};
// weakMap.set(obj, "ok");
// // console.log(weakMap.get(obj));
// weakMap.set("test", "good");

// let rohan = { name: "rohan" };
// let weak = new WeakMap();
// weak.set(rohan, "ok");
// rohan = null;
// console.log(weak.get(rohan));

// weakMap use case
// exampel 1 problem!
// let visiteCount = new Map(); // check user Visit count

// // count user
// function countUser(user) {
//   let count = visiteCount.get(user) || 0;
//   visiteCount.set(user, count + 1);
// }
// user = null;

// example 2 solution
// let visiteCount = new WeakMap();
// // count user
// function countUser(user) {
//   let count = visiteCount.get(user) || 0;
//   visiteCount.set(user, count + 1);
// }
// user = null;

// caching
// let cache = new WeakMap();

// // remember The resut
// function process(obj) {
//   if (!cache.has(obj)) {
//     let result = obj;
//     cache.set(obj, result);
//     return result;
//   }
//   return cache.get(obj);
// }
// let obj = {};
// let result1 = process(obj);

// // later
// let result2 = process(obj); // result taken form cache
// obj = null;

// weakset
// let visit = new WeakSet();

// let john = { name: "john" };
// let pete = { name: "pete" };
// let mary = { name: "mary" };

// //visisted user is 2 now
// visit.add(john);
// // visit.add(mary);
// visit.add(pete);
// visit.add(john);

// console.log(visit.has(mary));

// john = null;

// console.log(visit.has(john));

// let user = {
//   name: "rohan",
//   age: 30,
// };

// for (let value of Object.values(user)) {
//   console.log(value);
// }
