console.log("🔹 Switch Statement");
// let a = 2 + 2;
// switch (a) {
//   case 3:
//     alert("Too small");
//     break;
//   case 4:
//     alert("Exactly!");
//     break;
//   case 5:
//     alert("Too big");
//     break;
//   default:
//     alert("I don't know such values");
// }
// let a = 2 + 2;
// switch (a) {
//   case 3:
//     alert("Too small");
//   case 4:
//     alert("Exactly!");
//   case 5:
//     alert("Too big");
//   default:
//     alert("I don't know such values");
// }
// let a = "1";
// let b = 0;
// switch (+a) {
//   case b + 1:
//     alert("this runs, because +a is 1, exactly equals b+1");
//     break;
//   default:
//     alert("this doesn't run");
// }
// let a = 3;
// switch (a) {
//   case 4:
//     alert("Right!");
//     break;
//   case 3: // (*) grouped two cases
//   case 5:
//     alert("Wrong!");
//     alert("Why don't you take a math class?");
//     break;
//   default:
//     alert("The result is strange. Really.");
// }
// let arg = prompt("Enter a value?");
// switch (+arg) {
//   case "0":
//   case "1":
//     alert("One or zero");
//     break;
//   case "2":
//     alert("Two");
//     break;
//   case 3:
//     alert("Never executes!");
//     break;
//   default:
//     alert("An unknown value");
// }
// let day = new Date().getDay();
// console.log(day);

// let dayName;

// switch (day) {
//   case 0:
//     dayName = "Sunday";
//     break;
//   case 1:
//     dayName = "Monday";
//     break;
//   case 2:
//     dayName = "Tuesday";
//     break;
//   case 3:
//     dayName = "Wednesday";
//     break;
//   case 4:
//     dayName = "Thursday";
//     break;
//   case 5:
//     dayName = "Friday";
//     break;
//   case 6:
//     dayName = "Saturday";
//     break;
// }

// console.log(dayName);
function calculate(num1, num2, operator) {
  let result;

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
      result = "Invalid operator";
  }

  return result;
}

console.log(calculate(5, 3, "*")); // 15
