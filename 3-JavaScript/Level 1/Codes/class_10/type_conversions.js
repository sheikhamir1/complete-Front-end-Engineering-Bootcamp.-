/**
 * Type Conversions in JavaScript
 * --------------------------------
 * JavaScript automatically converts values between types when needed.
 * This process is called Type Conversion (or Type Coercion).
 *
 * There are 3 main conversions:
 *   1. String Conversion
 *   2. Numeric Conversion
 *   3. Boolean Conversion
 *
 * In this file we’ll explore all three with examples.
 */

// ==============================
// 1. STRING CONVERSION
// ==============================

// Automatic string conversion when using alert or console.log
// let val = true;
// console.log(val); // true (boolean)

x = "";
// console.log(Number(x)); // 0

// // Explicit conversion
// val = String(val);
// console.log(val); // "true"
// console.log(typeof val); // string

// // Example: Displaying a number as text
// let age = 25;
// let message = "Your age is " + String(age);
// console.log(message); // "Your age is 25"

// // Example: Date to string conversion
// let today = new Date();
// console.log(String(today)); // e.g. "Sun Aug 31 2025 ..."

// // Pitfall: + operator with strings
// console.log(1 + "2"); // "12" (string concatenation, not math)

// ==============================
// 2. NUMERIC CONVERSION
// ==============================

// Happens automatically with math operators (except "+")
// console.log("6" / "2"); // 3
// console.log("10" - "5"); // 5

// // Explicit conversion using Number()
// let str = "123";
// console.log(str, typeof str); // "123", string

// let num = Number(str);
// console.log(num, typeof num); // 123, number

// // Invalid conversion
// let invalid = Number("hello");
// console.log(invalid); // NaN

// // Conversion rules
// console.log(Number(undefined)); // NaN
// console.log(Number(null)); // 0
// console.log(Number(true)); // 1
// console.log(Number(false)); // 0
// console.log(Number("   123   ")); // 123 (whitespace ignored)
// console.log(Number("")); // 0 (empty string)
// console.log(Number("123z")); // NaN

// // Real-life scenario: form input (string → number)
// let input = "42"; // imagine this comes from an input box
// let userAge = Number(input);
// console.log(userAge + 1); // 43

// // parseInt and parseFloat for partial numbers
// console.log(parseInt("100")); // 100
// console.log(parseFloat("12.5em")); // 12.5

// ==============================
// 3. BOOLEAN CONVERSION
// ==============================

// Explicit conversion
// console.log(Boolean(1)); // true
// console.log(Boolean(0)); // false
// console.log(Boolean("  ")); // true
// console.log(Boolean("hi")); // true
// console.log(Boolean("")); // false

// // Implicit conversion in conditions
// if ("hello") {
//   console.log("This runs because non-empty string → true");
// }
// if ("") {
//   console.log("This will NOT run");
// }

// // Falsy values: 0, "" (empty string), null, undefined, NaN
// let data = null;
// if (!data) {
//   console.log("No data"); // runs because null → false
// }

// Pitfall: "0" is truthy
// console.log(Boolean(0)); // fasle
// console.log(Boolean("0")); // true
// console.log(Boolean(" ")); // true (non-empty string with space)

// ==============================
// 4. EXTRA NOTES & GOTCHAS
// ==============================

// Type coercion with +
// console.log("5" + 1); // "51"
// console.log("5" - 1); // 4

// Equality checks
// console.log(0 == false); // true (because of type coercion)
// console.log(0 === false); // false (strict equality, no conversion)

// Always prefer === to avoid unexpected results

// NaN is tricky: it is never equal to itself
// console.log(NaN === NaN); // false
// console.log(isNaN(NaN)); // true (correct way to check)

// ==============================
// SUMMARY
// ==============================
/**
 * String Conversion → Use String(value). Often automatic with alert, log, or concatenation.
 * Numeric Conversion → Happens in math operations. Use Number(value), parseInt, parseFloat.
 * Boolean Conversion → Happens in conditions. Use Boolean(value).
 *
 * Remember:
 *   - undefined → NaN when converted to number
 *   - null → 0 when converted to number
 *   - "0" and " " (space string) are truthy!
 *   - Always use === instead of == to avoid hidden coercion
 */

// A practical example of type conversions
function processInput(input) {
  // Convert to string to ensure it's a string
  const strInput = String(input);

  // Check if it's a valid number
  const numInput = Number(strInput);
  //"NAN"

  if (isNaN(numInput)) {
    // Not a valid number
    alert(`"${strInput}" is not a valid number`);
    return null;
  }

  // Convert to boolean to check if it's truthy
  const boolInput = Boolean(numInput);

  if (boolInput) {
    console.log(numInput * 2);

    return numInput * 2; // Double the number
  } else {
    alert("The number is zero");
    return 0;
  }
}

// Test cases
processInput("5"); // Returns 10
processInput("0"); // Alerts "The number is zero"
processInput("hello"); // Alerts "hello" is not a valid number"
