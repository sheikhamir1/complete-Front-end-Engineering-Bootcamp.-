// 1. Creating and Inserting Elements

// // Step 1: Create the Element in memory
// let newAlert = document.createElement("div");
// // console.log(newAlert);

// // Step 2: Configure the Element
// newAlert.className = "alert-box";
// newAlert.textContent = "Your settings have been saved.";

// // Step 3: Insert into the DOM
// let container = document.getElementById("container");
// container.append(newAlert);

// ----------------------------------------------------

// 2. The Modern Insertion API
// Step 1: Create the Element in memory
// let newAlert = document.createElement("div");
// // console.log(newAlert);

// // Step 2: Configure the Element
// newAlert.className = "alert-box";
// newAlert.textContent = "Your settings have been saved.";

// // Step 3: Insert into the DOM
// let container = document.getElementById("container");
// // container.append("<div>This will NOT render as HTML</div>");
// // container.append(newAlert);
// // container.prepend(newAlert);
// // container.before(newAlert);
// // container.after(newAlert);
// // container.replaceWith(newAlert);

// ----------------------------------------------------

// 3. Inserting HTML Strings (insertAdjacentHTML)

// let list = document.getElementById("list");

// // Insert INSIDE the UL, before the first <li>
// list.insertAdjacentHTML("afterbegin", "<li>Item 0</li>");

// // Insert INSIDE the UL, after the last <li>
// list.insertAdjacentHTML("beforeend", "<li>Item 2</li>");

// // Insert OUTSIDE the UL, directly above it
// list.insertAdjacentHTML("beforebegin", "<h3>List Title</h3>");

// ----------------------------------------------------

// 4. Moving and Removing Elements
// let topBox = document.getElementById("top-box");
// let bottomBox = document.getElementById("bottom-box");

// // Move the top box to be AFTER the bottom box
// bottomBox.after(topBox);
// topBox.remove();

// // The DOM is now: Bottom -> Top

// ----------------------------------------------------
// 5. Cloning Elements (cloneNode)

// const container = document.getElementById("container");
// const originalCard = document.querySelector(".user-card");

// let count = 2;

// // ----------------------
// // Deep Clone
// // ----------------------
// document.getElementById("deepClone").addEventListener("click", function () {
//   // Copy everything
//   let copiedCard = originalCard.cloneNode(true);

//   // Change content
//   copiedCard.querySelector("h3").textContent = "User " + count;
//   copiedCard.querySelector("p").textContent = "Software Engineer";

//   container.append(copiedCard);

//   count++;
// });

// // ----------------------
// // Shallow Clone
// // ----------------------
// document.getElementById("shallowClone").addEventListener("click", function () {
//   // Copy only outer div
//   let copiedCard = originalCard.cloneNode(false);

//   copiedCard.style.background = "#ffeaa7";
//   copiedCard.style.padding = "20px";
//   copiedCard.style.textAlign = "center";

//   copiedCard.innerHTML = `
//         <h3>Shallow Clone</h3>
//         <p>No image, no original children were copied.</p>
//     `;

//   container.append(copiedCard);
// });

// -----------------------------------------------------

// 6. Managing CSS Classes

// const box = document.getElementById("box");

// // Add a class
// document.getElementById("addBtn").addEventListener("click", function () {
//   box.classList.add("active");
// });

// // Remove a class
// document.getElementById("removeBtn").addEventListener("click", function () {
//   box.classList.remove("active");
// });

// // Toggle a class
// document.getElementById("toggleBtn").addEventListener("click", function () {
//   box.classList.toggle("active");
// });

// // Check if a class exists
// document.getElementById("checkBtn").addEventListener("click", function () {
//   if (box.classList.contains("active")) {
//     alert("The 'active' class is present.");
//   } else {
//     alert("The 'active' class is NOT present.");
//   }
// });

// ----------------------------------------------------

// 7. Managing Inline Styles (elem.style)

// const box = document.getElementById("box");

// // Change individual styles
// document.getElementById("changeBtn").addEventListener("click", function () {
//   // camelCase
//   box.style.backgroundColor = "green";

//   // String with unit
//   box.style.width = "300px";

//   box.style.marginTop = "40px";

//   box.style.color = "white";
// });

// // Reset one style
// document.getElementById("resetBtn").addEventListener("click", function () {
//   // Removes only the inline margin-top
//   box.style.marginTop = "";
//   //   box.style = "";
// });

// // Overwrite all inline styles
// document.getElementById("cssTextBtn").addEventListener("click", function () {
//   box.style.cssText = `
//         background:red;
//         color:white;
//         width:250px;
//         height:120px;
//         line-height:120px;
//         border-radius:15px;
//         font-size:22px;
//     `;
// });

// -----------------------------------------------------
// 8. Reading the Final Applied Styles (getComputedStyle)

// const box = document.getElementById("box");

// document.getElementById("checkBtn").addEventListener("click", function () {
//   console.log("Using element.style");
//   console.log("Font Size:", box.style.fontSize);
//   console.log("Background:", box.style.backgroundColor);

//   console.log("--------------------------");

//   console.log("Using getComputedStyle()");

//   let styles = getComputedStyle(box);

//   console.log("Font Size:", styles.fontSize);
//   console.log("Background:", styles.backgroundColor);
//   console.log("Width:", styles.width);
//   console.log("Color:", styles.color);
// });
