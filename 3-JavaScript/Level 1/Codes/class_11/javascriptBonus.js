/****************************************************
 🌟 JavaScript Operators: The Complete Guide
 ------------------------------------------------------
 📝 Bonus section:
 
****************************************************/

/***********************
 🔍 COMPARISON OPERATORS
 -----------------------
 Compare values, return true/false.
***********************/

x = 5;

// console.log(x == "5"); // true  (loose equality)
// console.log(x === "5"); // false (strict equality)
// console.log(x !== "5"); // true
// console.log(x > 3); // true
// console.log(x <= 5); // true

// Real World 🌍
// - Validating form inputs (age >= 18 ? allow : deny)
// - Checking login role (role === "admin")

/***********************
 🤝 LOGICAL OPERATORS
 -----------------------
 Combine conditions.
***********************/

// x = 6;
// y = 3;

// console.log(x < 10 && y > 1); // true (AND)
// console.log(x == 5 || y == 5); // false (OR)
// console.log(!(x == y)); // true (NOT)

// Real World 🌍
// - if(user.isLoggedIn && user.isAdmin)
// - searchQuery || "default search"

/***********************
 ❓ TERNARY (?:)
 -----------------------
 Shorthand if/else.
***********************/

// let age = 17;
// let voteable = age < 18 ? "Too young" : "Old enough";
// console.log(voteable); // "Too young"

// Real World 🌍
// - Display "Free" if price == 0 else show price
// - status = isOnline ? "🟢 Online" : "🔴 Offline";

/***********************
 🌀 NULLISH COALESCING (??)
 -----------------------
 Return 1st non-null/undefined.
***********************/

// let name = null;
// let text = "missing";
// let result = name ?? text;
// console.log(result); // "missing"

// Real World 🌍
// - userInput ?? defaultValue
// - profile.bio ?? "No bio available"

/***********************
 🧐 OPTIONAL CHAINING (?.)
 -----------------------
 Prevents errors when accessing nested properties.
***********************/

// const car = { type: "Fiat", model: "500", color: "white" };
// console.log(car?.name); // undefined, no error!

// Real World 🌍
// - user?.address?.city
// - product?.reviews?.length

/***********************
 📐 OPERATOR PRECEDENCE
 -----------------------
 Defines which operator runs first.
***********************/

// let p = 100 + 50 * 3; // 100 + (150) = 250
// let q = (100 + 50) * 3; // 150 * 3 = 450
// let r = (100 / 50) * 3; // (2) * 3 = 6

// Precedence Order (simplified):
// () > ++/-- > ** > * / % > + - > < > <= >=
// > == != === > && > || > ?? > ?: > =

// Real World 🌍
// - Always use parentheses () for clarity.
//   Example: total = (price + tax) * quantity;

/***********************
 🎯 CONCLUSION
 -----------------------
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
*****************************************************/
