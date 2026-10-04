/****************************************************
 🌟 JavaScript Basic Operators & Maths 🌟
 Author: Your Study Companion 🚀
 
 In this file, we’ll explore:
 - Unary & Binary operators
 - Maths operations (+, -, *, /, %, **)
 - String concatenation
 - Unary + (conversion)
 - Operator precedence
 - Assignment (=) & chaining
 - Modify-in-place (+=, -=, *=, /=)
 - Increment / Decrement (++ / --)
 - Bitwise operators (⚡ low-level magic)
 - Comma operator (,)
 - Real world scenarios 🏆
****************************************************/

/***********************
 🔹 Unary vs Binary Operators
***********************/
// let x = 5;
// let y = 2;

// // Unary ➡ one operand
// console.log(-x); // -5 (negation ❌)
// console.log(+true); // 1 (converts boolean ➡ number)
// console.log(+"42"); // 42 (string ➡ number)

// // Binary ➡ two operands
// console.log(x - y); // 3
// console.log(x * y); // 10

/***********************
 🔹 Basic Math Operations
***********************/
// console.log(5 + 3); // 8 ➕ Addition
// console.log(5 - 3); // 2 ➖ Subtraction
// console.log(5 * 3); // 15 ✖ Multiplication
// console.log(5 / 2); // 2.5 ➗ Division

// Modulus (remainder)
// console.log(5 % 2); // 1 🍕 slices left after sharing

// // // Exponentiation (power)
// console.log(2 ** 3); // 8 ⚡ 2³
// console.log(9 ** 0.5); // 3 ➡ square root

/***********************
 🔹 String Concatenation with +
***********************/
// let greeting = "Hello" + " " + "World 🌍";
// console.log(greeting); // Hello World 🌍

// console.log("1" + 2); // "12" (string + number = string!)
// console.log(2 + "1"); // "21"
// console.log(2 + 2 + "1"); // "41" (numbers first ➡ then string)

/***********************
 🔹 Unary Plus ➡ Convert to Number
***********************/
// let apples = "2";
// let oranges = "3";

// console.log(apples + oranges); // "23" (string concat ❌)
// console.log(+apples + +oranges); // 5 (numeric addition ✅)

/***********************
 🔹 Operator Precedence 🎯
***********************/
// console.log(1 + 2 * 2); // 5 (multiplication first)
// console.log((1 + 2) * 2); // 6 (parentheses change order)

// let result = 2 * 2 + 1;
// console.log(result); // 5

/***********************
 🔹 Assignment (=) returns value
***********************/
// let a = 1;
// let b = 2;
// console.log(a); // 1
// let c = 3 - (a = b + 1); // tricky 🤯
// console.log(a); // 3
// console.log(c); // 0

/***********************
 🔹 Chained Assignment
***********************/
// let m, n, o;
// m = n = o = 10 + 5; // all become 15
// console.log(m, n, o);

/***********************
 🔹 Modify-in-place (+=, -=, *=, /=)
***********************/
// let score = 10;
// score += 5; // 15
// score *= 2; // 30
// score -= 10; // 20
// score /= 2; // 10
// console.log("Score:", score);

/***********************
 🔹 Increment / Decrement (++ / --)
***********************/
// let counter = 0;
// console.log(++counter); // 1 (prefix ➡ increment then return)
// console.log(counter++); // 1 (postfix ➡ return then increment)
// console.log(counter++); // 1 (postfix ➡ return then increment)
// console.log(counter++); // 1 (postfix ➡ return then increment)
// console.log(counter++); // 1 (postfix ➡ return then increment)
// console.log(counter); // 2

/***********************
 🔹 Bitwise Operators ⚡ (Advanced)
***********************/
// let num1 = 5; // 0101
// let num2 = 3; // 0011
// console.log(num1 & num2); // 1 (AND)
// console.log(num1 | num2); // 7 (OR)
// console.log(num1 ^ num2); // 6 (XOR)
// console.log(~num1); // -6 (NOT)
// console.log(num1 << 1); // 10 (LEFT SHIFT)
// console.log(num1 >> 1); // 2 (RIGHT SHIFT)

/***********************
 🔹 Comma Operator ,
***********************/
// let test = (3 + 4, 1 + 2); // evaluates both, returns last
// console.log(test); // 7

// // Often used in loops
// for (let i = 0, j = 5; i < j; i++, j--) {
//   console.log(`i=${i}, j=${j}`);
// }

/***********************
 🏆 Real World Scenarios
***********************/

// 1. Shopping cart total
// let itemPrice = 50;
// let taxRate = 0.08;
// let quantity = 3;

// let total = itemPrice * quantity;
// console.log(total);
// total += total * taxRate; // add tax
// console.log("Total bill 🛒:", total);

// 2. User score system
// let points = 0;
// points += 10; // correct answer
// points--; // penalty ❌
// console.log("Points:", points);

// 3. Converting form inputs
// let width = "12"; // from HTML form
// let height = "8"; // from HTML form
// let area = +width * +height; // convert strings ➡ numbers
// console.log("Area 📏:", area);

// 4. Exponentiation in finance
// let principal = 1000;
// let rate = 0.05;
// let years = 2;
// let compound = principal * (1 + rate) ** years;
// console.log("Compound Interest 💰:", compound);

/****************************************************
 🎯 Summary:
  ✅ Operators are the building blocks of logic & math.
 ✅ Categories we covered:
   1. Assignment
   2. Arithmetic
   3. Comparison
   4. Logical
   5. Ternary
   6. Nullish Coalescing
   7. Optional Chaining
   8. Bitwise
   9. Precedence

 💡 Use them in real-world coding for:
   - Validations
   - Math/Stats
   - Games
   - Decision making
   - Data handling
 
 🏆 Real life: finance, shopping carts, scoring, form inputs.
****************************************************/
