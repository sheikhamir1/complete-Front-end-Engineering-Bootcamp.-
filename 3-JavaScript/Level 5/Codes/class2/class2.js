// const dashboard = document.getElementById("dashboard");
// // console.log(dashboard);

// // 2. querySelector: Gets ONLY the first matching anchor tag
// const firstLink = dashboard.querySelector(".sidebar a");
// // console.log(firstLink.className);

// // 3. querySelectorAll: Gets ALL matching anchor tags
// const allLinks = dashboard.querySelectorAll(".sidebar a");
// // console.log(allLinks[1].textContent);

// allLinks.forEach((link) => console.log(link.className));

// ------------------------------------------

// Select the Save button
// const saveBtn = document.querySelector(".btn-primary");

// ------------------------------
// matches()
// ------------------------------

// console.log(saveBtn.matches(".btn-primary"));
// true

// console.log(saveBtn.matches(".btn-secondary"));
// false

// console.log(saveBtn.matches("button"));
// true

// console.log(saveBtn.matches(".btn"));
// true

// ------------------------------
// closest()
// ------------------------------

// const mainContainer = saveBtn.closest("main");

// console.log(mainContainer);

// console.log(mainContainer.className);
// // content

// // Highlight the main container
// mainContainer.style.border = "2px solid green";

// // ------------------------------
// // Button Click Example
// // ------------------------------

// saveBtn.addEventListener("click", function () {
//   // Check whether this button has class btn-primary
//   if (this.matches(".btn-primary")) {
//     // console.log(this, "this");

//     alert("This is a Primary Button");
//   }

//   // Find nearest parent <main>
//   const parent = this.closest("main");

//   parent.style.backgroundColor = "#e75225";
// });

// --------------------------------------------------

// 3 .  Live Memory vs Static
// --------------------------------------------------
// =========================
// BODY ELEMENT
// =========================

// const bodyElem = document.getElementById("body");
// // console.log(bodyElem);

// console.log("BODY ELEMENT");
// console.log("nodeType :", bodyElem.nodeType);
// console.log("tagName  :", bodyElem.tagName);
// console.log("nodeName :", bodyElem.nodeName);

// // =========================
// // PARAGRAPH ELEMENT
// // =========================

// const paragraph = document.getElementById("message");

// console.log("\nPARAGRAPH");
// console.log("nodeType :", paragraph.nodeType);
// console.log("tagName  :", paragraph.tagName);
// console.log("nodeName :", paragraph.nodeName);

// // =========================
// // TEXT NODE
// // =========================

// // firstChild of <p> is its text

// const textNode = paragraph.firstChild;

// console.log("\nTEXT NODE");
// console.log(textNode.textContent);

// console.log("nodeType :", textNode.nodeType);
// console.log("tagName  :", textNode.tagName);
// console.log("nodeName :", textNode.nodeName);

// // =========================
// // COMMENT NODE
// // =========================

// // First comment inside body

// const commentNode = document.body.childNodes[1];

// console.log("\nCOMMENT NODE");
// console.log(commentNode);

// console.log("nodeType :", commentNode.nodeType);
// console.log("tagName  :", commentNode.tagName);
// console.log("nodeName :", commentNode.nodeName);

// // =========================
// // BUTTON CLICK
// // =========================

// document.getElementById("btn").addEventListener("click", function () {
//   alert(
//     `BODY
// nodeType : ${bodyElem.nodeType}
// tagName  : ${bodyElem.tagName}
// nodeName : ${bodyElem.nodeName}`,
//   );
// });

// -------------------------------------------------
// const box = document.getElementById("box");

// ----------------------------
// Read innerHTML
// ----------------------------

// console.log("innerHTML");
// console.log(box.innerHTML);

// ----------------------------
// Read outerHTML
// ----------------------------

// console.log("outerHTML");
// console.log(box.outerHTML);

// ----------------------------
// Read textContent
// ----------------------------

// console.log("textContent");
// console.log(box.textContent);

// ----------------------------
// innerHTML Example
// ----------------------------

// document.getElementById("innerBtn").onclick = function () {
//   box.innerHTML = `
//         <h2>New Heading</h2>

//         <p style="color:red;">
//             This paragraph was created with
//             <b>innerHTML</b>.
//         </p>
//     `;
// };

// // ----------------------------
// // outerHTML Example
// // ----------------------------

// document.getElementById("outerBtn").onclick = function () {
//   box.outerHTML = `
//         <section id="box">

//             <h2>Section Created</h2>

//             <p>
//                 The original DIV is gone!
//             </p>

//         </section>
//     `;
// };

// // ----------------------------
// // textContent Example
// // ----------------------------

// document.getElementById("textBtn").onclick = function () {
//   box.textContent = "<h2>Hello</h2><p>This is NOT HTML</p>";
// };

// -------------------------------------------------

// const btn = document.getElementById("checkout-btn");
// // console.log(btn.textContent);
// console.log(btn.dataset.userId);
// console.log(btn.dataset.orderStatus);
// btn.dataset.orderStatus = "Complete";
// console.log(btn.dataset.orderStatus);
