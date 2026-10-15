"use strict";

// let command = 'console.log("Executing Dynamic String");';
// eval(command);
// let mathString = "10 * 5";
// let mathResult = eval(mathString);
// console.log(mathResult);

// let multiLineCode = "let count = 0; count++; count + 10;";
// let finalResult = eval(multiLineCode);
// console.log(finalResult);

// let fun = new Function("let count = 0; count++;return count + 10;");
// console.log(fun());

// -------------------------------------------------

// function calculateScore() {
//   let score = 50;

//   eval("score = score + 50 ; console.log('Score Updated Inside Eval!');");

//   return score;
// }

// console.log(calculateScore());

// let existingVar = 10;

// eval("existingVar = 99; let newVar = 5; function dynamicFunc(){}");

// console.log(existingVar);
// console.log(newVar);
// console.log(dynamicFunc);

// -------------------------------------------------

// Eval is Evil

// let mode = "LOCAL";

// function testGlobalEval() {
//   let mode = "Function";

//   eval("console.log(mode);");

//   window.eval("console.log(mode);");
// }

// testGlobalEval();

// -----------------------------------------------------
// f (a) (b) (c)

// function multiply(a, b) {
//   return a * b;
// }

// console.log(multiply(10, 5));

// function curruedMultiply(a) {
//   return function (b) {
//     return a * b;
//   };
// }
// console.log(curruedMultiply(10)(5));

// const multply = (a) => (b) => a * b;
// console.log(multply(10)(10));

// const systemLog = (systemName) => (level) => (message) => {
//   console.log(`[${systemName}] [${level}]: ${message}`);
// };

// const authLogger = systemLog("Auth_Service");
// const authError = authLogger("ERROR");

// authError("Invalid token format.");
// authError("User not found.");

// systemLog("Database")("WARN")("High memory usage");

// function curry(originalFunction) {
//   return function curried(...args) {
//     if (args.length >= originalFunction.length) {
//       return originalFunction.apply(this, args);
//     } else {
//       return function (...nextArgs) {
//         return curried.apply(this, args.concat(nextArgs));
//       };
//     }
//   };
// }

// function calculateVolume(length, width, height) {
//   return length * width * height;
// }

// let curriedVolume = curry(calculateVolume);

// console.log(curriedVolume(2, 3, 4));
// console.log(curriedVolume(2)(3, 4));
// console.log(curriedVolume(2)(3)(4));

// function my(a, b = 2) {
//   console.log(arguments);
//   console.log(length);
// }
// my(1);

// -------------------------------------------------

// let admin = {
//   username: "Alex",
//   grantAccess() {
//     console.log(`Access granted to: ${this.username}`);
//   },
//   denyAccess() {
//     console.log("Access denied.");
//   },
// };

// admin.grantAccess();

// let extractedMethod = admin.grantAccess;
// extractedMethod();

// let admin = {
//   username: "Alex",
//   grantAccess() {
//     console.log(`Access granted to: ${this.username}`);
//   },
// };

// let safeMethod = admin.grantAccess.bind(admin);
// safeMethod();

// let isApproved = true;

// (isApproved ? admin.grantAccess.bind(admin) : admin.denyAccess.bind(admin))();

// const runCommand = () =>
//   isApproved ? admin.grantAccess() : admin.denyAccess();

// runCommand();
