// let user = {
//   name: "rohan",
//   sayHi: function () {
//     console.log("hi Buddy!");
//   },
// };
// user.sayHi();

// let str = "hello";
// console.log(str.toUpperCase());
// console.log(str);

// let n = 1.23456;
// console.log(typeof n, n);
// let x = n.toFixed(2);
// console.log(typeof x, x);

// alert(typeof 0);
// alert(typeof new Number(0));

// let user = {};
// if (user) {
//   console.log("i am here");
// }

// let zero = new Number(0);
// let zero = Number(0);
// console.log("value of zero: ", zero);

// if (zero) {
//   console.log("zero is truthy value.");
// } else {
//   console.log("zero is false value.");
// }

// ----------------------------------------------------
// Number tutorial

// let billion = 1000000000;
// let billion = 1_000_000_000;
// console.log(billion);

// let billion = 1e3;
// console.log(billion);
// console.log(7.3e5);

// let num = 2000;

// console.log(num.toString(2));
// console.log(num.toString(16));
// console.log(num.toString(8));
// console.log(num.toString(10));

// let num = 1.23456;
// console.log(Math.round(num * 100) / 100);

// let num = 12.34;
// let num = 12.36; //12.40
// console.log(num.toFixed(1));

// console.log(1e500);
// console.log(0.1 + 0.2 === 0.3);
// console.log(0.1 + 0.2);

// console.log((0.1).toString(2));
// console.log((0.2).toString(2));
// console.log((0.1 + 0.2).toString(2));

// let sum = 0.1 + 0.2;
// // console.log(typeof sum, sum);
// let result = +sum.toFixed(2);
// console.log(typeof result, result);
// console.log(9999999999999999);
// console.log(isNaN(NaN));
// console.log(isNaN("str"));

// console.log(NaN === NaN);

// console.log(isFinite("20"));
// console.log(isFinite("str"));
// console.log(isFinite(Infinity));

// let num = +prompt("enter a Number", "");
// console.log(isFinite(num));

// console.log(Number.isNaN(NaN));
// console.log(Number.isNaN("str" / 2));

//Note
// console.log(Number.isNaN("str"));
// console.log(isNaN("str"));

// console.log(Number.isFinite(123));
// console.log(Number.isFinite(Infinity));
// console.log(Number.isFinite(2 / 0));

//note
// console.log(Number.isFinite("123"));
// console.log(isFinite("123"));

//perseInt , parseFloat
// console.log(+"100px");

// console.log(parseInt("100px"));
// console.log(parseFloat("12.54"));
// console.log(parseFloat("a12"));

// optional argument
// console.log(parseInt("0xff", 16));
// console.log(parseInt("ff", 16));

// IMP math function
// console.log(Math.random() * 100);
// console.log(Math.max(3, 5, 9, -10, 0, 2));
// console.log(Math.min(3, 5, 9, -10, 0, 2));
// console.log(Math.min(3, 2, 1));
// console.log(Math.pow(2, 10));

// String tutorial

// console.log("i am string"); // single quoted
// console.log("i am string"); // Double quoted
// console.log(`i am string`); // backticks / string interpolation

// function sum(a, b) {
//   return a + b;
// }
// console.log(sum(2, 3));
// console.log("1 + 2 =", sum(1, 2));
// console.log(`1 + 2 = ${sum(1, 2)}`);

// let list = `*rohan
// *amir
// *aliya
// `;
// console.log(list);

// special character/ Escape Sequence character

// \n New Line--
// let list = "Guest:\n* Rohan\n* Amir\n* Aliya";
// console.log(list);

// let str1 = "Hello\nWorld";
// let str2 = `Hello
// World`;
// console.log(str1);
// console.log(str2);
// alert(str1 == str2);
// console.log(str1 == str2);

// Quotes
// console.log("hello 'World'");
// console.log("hello World \\");
// console.log("I\'am Good boy");
// console.log("I'am Good boy");
// console.log("i am\t--Good Boy");

// console.log("My\n".length);
// console.log("My\n".length());

// let str = "Hello how are you i am good";
// console.log(str[4]);
// console.log(str.at(1));

// console.log(str[str.length - 1]);
// console.log(str[str.length - 1]);
// console.log(str.length);

// let str = "Hey there";
// console.log(str.length);

// for (let c of str) {
//   console.log(c);
// }

// string Are Immutable
// let str = "Hi";
// console.log((str[0] = "A"));
// str[0] = "h";
// console.log(str[0]);
// alert(str[0]);

// changing String value
// let str = "Hi";
// console.log(str);

// str = "h" + str[1];
// alert(str);
// console.log(str);

// let str = "I am Rohan";
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// str.indexOf()
// let str = "Widget with id";

// console.log(str.indexOf("Widget"));
// console.log(str.indexOf("widget"));
// console.log(str.indexOf("id"));
// console.log(str.indexOf("id", 2));

// let str = "As sly as a fox, as strong as an ox";
// let target = "as";

// first algorithm
// let pos = 0;
// while (true) {
//   let foundPos = str.indexOf(target, pos);
//   console.log(` ${foundPos}`);
//   if (foundPos == -1) break;
//   pos = foundPos + 1;
// }

// second algorithm
// let count = -1;
// while ((count = str.indexOf(target, count + 1)) != -1) {
//   console.log(count);
// }

// let str = "i am rohan , i am Good Boy";
// console.log(str.includes("bad"));
// console.log(str.includes("rohan", 5));
// console.log(str.startsWith("i am rohan"));
// console.log(str.endsWith("Boy"));

// substring
// let str = "stringify";

// console.log(str.slice(3));
// console.log(str.slice(3, 7));
// console.log(str.slice(0, 1));
// console.log(str.slice(-4, -1));

//substring
// let str = "stringify";
// console.log(str.substring(2, 6));
// console.log(str.substring(6, 2));
// console.log(str.substr(-4, 2));

// console.log(str.slice(2, 6));
// console.log(str.slice(6, 2));

//String Comparing
// console.log("a" > "Z");
// console.log("A".codePointAt(0).toString(2));
// console.log("z".codePointAt(0));
// console.log("a".codePointAt(0).toString(2));
// let str = "";

// for (let i = 65; i <= 220; i++) {
//   str += String.fromCodePoint(i);
// }
// console.log(str);

// Output:
// ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~
// ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜ

// console.log("A" > "C");
// console.log("شسلشخلشخبيخشلي");
