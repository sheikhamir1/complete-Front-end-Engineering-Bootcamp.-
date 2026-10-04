console.log("🔹 Logical Operators");

// let hour = 9;
// if (hour < 10 || hour > 18) {
//   alert("The office is closed.");
// }

// let hour = 12;
// let isWeekend = false;
// if (hour < 10 || hour > 18 || isWeekend) {
//   alert("The office is closed.");
// } else {
//   alert("The office is open.");
// }

// Returns the first truthy value
// alert(1 || 0); // 1
// alert(null || 1); // 1
// alert(null || 0 || 1); // 1
// alert(undefined || null || 0); // 0
// alert(undefined || null || 0 || "Hello" || 23 || null); // Hello

// let firstName = "";
// let lastName = "";
// let nickName = "SuperCoder";
// alert(firstName || lastName || nickName || "Anonymous"); // SuperCoder

// true || alert("not printed");
// false || alert("printed");

// let hour = 12;
// let minute = 30;
// if (hour == 12 && minute == 30) {
//   alert("The time is 12:30");
// }
if (1 && 0) {
  // evaluated as true && false
  alert("won't work, because the result is falsy");
}
// If the first operand is truthy,
// AND returns the second operand:
// alert(1 && 0); // 0
// alert(1 && 5); // 5

// // If the first operand is falsy,
// // AND returns it. The second operand is ignored
// alert(null && 5); // null
// alert(0 && "no matter what"); // 0
// Several values in a row
// alert(1 && 2 && null && 3); // null

// // When all values are truthy
// alert(1 && 2 && 3); // 3, the last one
// alert(!true); // false
// alert(!0); // true
// alert(!""); // true
// alert(!null); // true
// let a = 1,
//   b = 2,
//   c = 3;
// alert(a || (b && c)); // 1
// // Equivalent to: a || (b && c) = 1 || (true) = 1
