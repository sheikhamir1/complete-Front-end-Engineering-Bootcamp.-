/****************************************************
 📘 JavaScript Conditional Branching
-----------------------------------------------------
👉 In this file, we’ll explore:

   1. if statement
   2. else statement
   3. else if chain
   4. Boolean conversion (truthy/falsy)
   5. Conditional (ternary) operator ?
   6. Multiple ? usage
   7. Good vs bad practices

****************************************************/

// 1️⃣ Basic "if" statement
// console.log("🔹 IF Statement Example");
let year = 2015;

// if (year == 2015) {
//   console.log("🎉 You are right!");
//   console.log("💡 ECMAScript-2015 is also known as ES6.");
// }

// // ⚠️ Always use curly braces {} for readability, even for single line.

// // 2️⃣ Boolean conversion (truthy/falsy)
// console.log("🔹 Boolean Conversion");

// if (0) {
//   console.log("This will NOT run ❌ (0 is falsy)");
// }
// if (1) {
//   console.log("This WILL run ✅ (1 is truthy)");
// }

// // Truthy values: non-empty strings, numbers except 0, objects, arrays
// // Falsy values: 0, "", null, undefined, NaN

// // 3️⃣ Using a boolean variable in if
// let cond = year === 2015; // true
// if (cond) {
//   console.log("✅ Condition stored in variable works too!");
// }

// // 4️⃣ The "else" clause
// console.log("🔹 IF...ELSE Example");
let age = 16;

// if (age >= 18) {
//   console.log("🎉 Access granted!");
// } else {
//   console.log("🚫 Access denied! Must be 18+.");
// }

// // 5️⃣ The "else if" chain
// console.log("🔹 ELSE IF Example");

// let examScore = 75;

// if (examScore >= 90) {
//   console.log("🏆 Grade: A");
// } else if (examScore >= 75) {
//   console.log("👏 Grade: B");
// } else if (examScore >= 50) {
//   console.log("🙂 Grade: C");
// } else {
//   console.log("❌ Fail");
// }

// // ✅ Order matters! First matching block executes, then chain stops.

// // 6️⃣ Conditional (ternary) operator ?
// console.log("🔹 Conditional Operator ?");

// let isAdult = age >= 18 ? "✅ Yes, adult" : "🚫 No, minor";
// console.log(isAdult);

// // Same as:
// if (age >= 18) {
//   isAdult = "✅ Yes, adult";
// } else {
//   isAdult = "🚫 No, minor";
// }

// // 7️⃣ Multiple ? operators
// console.log("🔹 Multiple ? Example");

// let userAge = 25;
// let message =
//   userAge < 3
//     ? "👶 Hi, baby!"
//     : userAge < 18
//     ? "🙋 Hello!"
//     : userAge < 100
//     ? "🙏 Greetings!"
//     : "🤔 What an unusual age!";

// console.log(message);

// // Equivalent using if...else:
// if (userAge < 3) {
//   message = "👶 Hi, baby!";
// } else if (userAge < 18) {
//   message = "🙋 Hello!";
// } else if (userAge < 100) {
//   message = "🙏 Greetings!";
// } else {
//   message = "🤔 What an unusual age!";
// }

// // 8️⃣ Non-traditional usage of ? (⚠️ Not recommended)
// let company = "Netscape";

// // BAD ❌: Hard to read
// company == "Netscape" ? console.log("✅ Right!") : console.log("❌ Wrong!");

// // BETTER ✅: More readable
// if (company == "Netscape") {
//   console.log("✅ Right!");
// } else {
//   console.log("❌ Wrong!");
// }

// // 9️⃣ Real-world scenarios 🌍

// // Example 1: Login check
let username = "admin";
if (username === "admin") {
  console.log("🔐 Welcome, admin!");
} else {
  console.log("🙅 Access denied!");
}

// // Example 2: Discount system
let purchaseAmount = 1200;
let discount = purchaseAmount > 1000 ? 20 : 5;
console.log(`💰 You get ${discount}% discount!`);

// // Example 3: Choosing theme (dark/light)
let theme = "dark";
let bgColor = theme === "dark" ? "🌑 Black background" : "🌕 White background";
console.log(bgColor);

/****************************************************
 ✅ Summary
-----------------------------------------------------
if (...) { ... }   → Runs block if condition is truthy
else               → Runs block if condition is falsy
else if (...)      → Check multiple conditions
Truthy values      → non-empty strings, numbers != 0, objects, arrays
Falsy values       → 0, "", null, undefined, NaN
? operator         → Returns one value or another
Multiple ?         → Useful for short multi-conditions
⚠️ Use if...else   → When you need clear branching
⚠️ Use ?           → When returning a value based on condition
****************************************************/
