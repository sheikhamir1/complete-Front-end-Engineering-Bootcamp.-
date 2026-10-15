console.log("Async Script Started");

// Simulate heavy work
// for (let i = 0; i < 500000000; i++) {}

console.log("Async Script Finished");

const status = document.getElementById("status");
const btn = document.getElementById("btn");

status.textContent = "Async script finished.";
status.style.color = "blue";

btn.disabled = false;

btn.onclick = function () {
  alert("Async Script");
};
