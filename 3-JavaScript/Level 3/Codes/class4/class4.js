// console.log(window);
// window.alert("hi");

// var x = 6;
// console.log(window.x);

// let me = 10;
// console.log(window.me);

// const YOU = 100;
// console.log(window.YOU);

// window.myCode = { name: "rohan" };
// console.log(window.myCode.name);

// ---------------------------------------

// if (!window.myGreeting) {
//   window.myGreeting = function (name) {
//     return `Assalamu Alaikum ${name}`;
//   };
// }
// console.log(window.myGreeting("Rohan"));
// console.log(window.myGreeting("Rahul"));
// console.log(window.myGreeting("John"));
// console.log(window.myGreeting("Aliya"));

// function functionName() {
//   return `Hi`;
// }

// console.log(functionName());
// console.log(typeof functionName);

// ------------------------------------

// function greet() {
//   console.log("Assalamu Alaikum");
// }
// greet.language = "English";
// greet();
// console.log(greet.language);

// function login() {
//   login.counter++;
//   console.log("User Logged In");
// }

// login.counter = 0;
// login();
// login();
// console.log(login.counter);

// function sayHi() {
//   console.log("hi");
// }
// sayHi();
// console.log(sayHi.name);

// let sayHi = function () {
//   console.log("hi");
// };

// sayHi();
// console.log(sayHi.name);

// let user = {
//   sayHi() {
//     console.log("Hello World");
//   },
// };
// user.sayHi();
// console.log(user.sayHi.name);

// let arr = [
//   function () {
//     console.log("you");
//   },
// ];

// arr[0]();
// console.log(arr[0].name);

// -------------------------------------------

// function calculator(a, b) {
//   return a + b;
// }
// calculator.version = "1.0";
// calculator.author = "Rohan";

// console.log(calculator(5, 3));
// console.log(calculator.version);
// console.log(calculator.author);
// console.log(`Check The Length Of Parameter ${calculator.length}`);

// function f1(a) {}
// function f2(a, b) {}
// function f3(a, b, c, d) {}
// function many(a, b, ...more) {}

// console.log(f1.length); // 1
// console.log(f2.length); // 2
// console.log(f3.length); // 4
// console.log(many.length); // 2 (rest params not counted)

// function ask(question, ...handlers) {
//   let isYes = confirm(question);

//   for (let handler of handlers) {
//     if (handler.length == 0) {
//       if (isYes) handler(); // Only call if YES
//     } else {
//       handler(isYes); // Always call with result
//     }
//   }
// }

// ask(
//   "Question?",
//   () => alert("You said yes"),
//   (result) => alert(result),
// );

// function makeCounter() {
//   let count = 0;

//   return function () {
//     return count++;
//   };
// }

// let count = makeCounter();
// console.log(count());
// console.log(count());
// console.log(count());

// function makeCounter() {
//   function counter() {
//     return counter.count++;
//   }
//   counter.count = 0;
//   return counter;
// }
// let count = makeCounter();
// count.count = 100;

// console.log(count());
// console.log(count());
// console.log(count());
// console.log(count());

// ---------------------------------

// let greet = function (name) {
//   if (!name) {
//     return greet("Guest");
//   }

//   return `Hello ${name}`;
// };

// let welcome = greet;
// greet = null;

// console.log(welcome());

// N-F-E
// let greet = function sayHello(name) {
//   if (!name) {
//     return sayHello("Guest");
//   }

//   return `Hello ${name}`;
// };

// let welcome = greet;
// greet = null;

// console.log(welcome());

// let outerSum = function innerSum() {
//   console.log("Hello");
// };
// innerSum();
