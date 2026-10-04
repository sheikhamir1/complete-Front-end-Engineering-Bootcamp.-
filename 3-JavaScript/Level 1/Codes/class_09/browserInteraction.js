/****************************************************
 🌟 JavaScript Interaction Functions: alert, prompt, confirm
 ------------------------------------------------------
 📝 Overview:
 - These are built-in browser methods for simple interaction.
 - They are *modal dialogs*, meaning they stop everything 
   else on the page until the user responds.
****************************************************/

/***********************
 🔔 1. ALERT
 -----------------------
 ➡ Shows a message and waits for user to click "OK".
 - Syntax: alert(message)
 - Use Case: Notifications, warnings, greetings
***********************/

// Example 1: Basic greeting
// alert("👋 Hello, welcome to our website!");

// Example 2: Warning message
// alert("⚠️ Warning: Unsaved changes will be lost!");

// ❌ Limitation: You cannot style or change the position of the alert box.
// ✅ Pro: Very simple, works in all browsers.

/***********************
 ✍️ 2. PROMPT
 -----------------------
 ➡ Shows a message + input field + OK/Cancel.
 - Syntax: result = prompt(title, [default])
 - Returns: 
     - user input (string)
     - null if user presses Cancel or Esc
***********************/

// Example 1: Ask user’s name
// let userName = prompt("What is your name? 🤔", "john wick");
// console.log(userName); // e.g. "Alice" or null
// console.log(typeof userName); // string or object (null)

// alert(`👋 Hello, ${userName}!`);

// Example 2: Ask user’s age
// let age = prompt("How old are you?", 18);
// alert(`🎂 You are ${age} years old!`);

// Example 3: No default provided
// ⚠️ In old Internet Explorer, leaving out the default could show "undefined".
// let test = prompt("Type anything 👇");
// console.log(test); // May show "undefined" in IE

// ✅ Good practice: always provide a default (even empty string)
// let safeTest = prompt("Type anything 👇", "");

// Real World Use Case: Login simulation
// let username = prompt("Enter your username 🧑‍💻", "user123");
// let password = prompt("Enter your password 🔑", "");

// ❌ Note: Don’t use prompt for real passwords in production!
// ✅ Instead: use proper HTML forms and secure authentication.

/***********************
 ✅ 3. CONFIRM
 -----------------------
 ➡ Shows a message with OK/Cancel buttons.
 - Syntax: result = confirm(question)
 - Returns:
     - true if OK
     - false if Cancel/Esc
***********************/

// Example 1: Confirmation for delete
// let isDelete = confirm("🗑️ Do you really want to delete this file?");
// if (isDelete) {
//   alert("✅ File deleted successfully!");
// } else {
//   alert("❌ Deletion canceled.");
// }

// Example 2: Are you the boss?
// let isBoss = confirm("👑 Are you the boss?");
// alert(isBoss ? "Welcome, Boss! 🙌" : "Access denied 🚫");

// Real World Use Case: Leaving page
// let leave = confirm("↩️ Do you want to leave this page?");
// if (leave) {
//   alert("Navigating away...");
// } else {
//   alert("Staying here... 🏠");
// }

/***********************
 🌍 Real-World Scenarios
 -----------------------
 - alert():
   ✔ Show success or error messages
   ✔ Remind users to complete tasks
   ✔ Notify before downtime

 - prompt():
   ✔ Quick user input (name, feedback, numbers)
   ✔ Temporary testing or debugging
   ✔ Tiny demos (quiz app: "What is 2 + 2?")

 - confirm():
   ✔ Critical actions (delete, logout, reset)
   ✔ Verify user decisions
   ✔ Agreement prompts ("Do you accept terms?")
***********************/

/***********************
 🏁 Limitations
 -----------------------
 1. Blocking/Modal: Everything stops until user responds.
 2. Unstyled: Look and position depend on browser; no customization.
 3. Not for modern UX: Better to use custom modals (HTML/CSS/JS)
    if you need design, branding, or better user experience.
***********************/

/***********************
 🎉 Conclusion
 -----------------------
 ✅ Use alert, prompt, confirm for:
    - Simple tests
    - Quick demos
    - Educational projects

 ❌ Avoid them for production apps:
    - Replace with modern modals (Bootstrap, Tailwind, SweetAlert, etc.)
***********************/

// Getting user input
// const age = parseInt(prompt("How old are you?", 25));
// const age = prompt("How old are you?", 25);
// console.log(age, typeof age);

// // Handling cancel
// if (age !== null) {
//   alert(`You are ${age} years old.`);
// } else {
//   alert("You didn't enter your age.");
// }

function greetUser() {
  const name = prompt("What's your name?", "");

  if (name !== null && name.trim() !== "") {
    const isHappy = confirm(`Hi ${name}! Are you having a good day?`);

    if (isHappy) {
      alert("That's great to hear!");
    } else {
      alert("I hope your day gets better!");
    }
  } else {
    alert("Please enter a valid name.");
  }
}

greetUser();
