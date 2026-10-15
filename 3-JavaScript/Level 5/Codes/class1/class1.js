// console.log(this);
// window.location.href = "https://google.com";
// console.log(window.navigator.userAgent);
// document.body.style.backgroundColor = "#121212";
// document.body.style.color = "#fff";

// * *Missing Root Tags:* If you just write "Hello" in an HTML file, the browser automatically wraps it in <html>, <head>, and <body> nodes.

// * *Unclosed Tags:* If you write <p>Text 1 <p>Text 2, the browser automatically closes the first <p> before opening the second.

// * *The Table Injection:* By HTML specification, a <table> must have a <tbody>. If you write <table><tr>, the browser will silently insert a <tbody> node between the table and the row in the DOM tree.

// let body = document.body;
// let firstDiv = body.firstElementChild;
// let nextTag = firstDiv.nextElementSibling;
// for (let element of body.children) {
//   console.log(element.textContent);
// }
// console.log(firstDiv);

// let elements = document.body.children;
// // console.log(elements);
// let arrayElements = Array.from(elements);
// // console.log(arrayElements);
// let divOnly = arrayElements.filter((el) => el.tagName === "DIV");
// console.log(divOnly);
