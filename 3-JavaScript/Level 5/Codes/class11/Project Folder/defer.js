console.log("Deferred Script Started");

// Simulate heavy work
// for (let i = 0; i < 5000000000; i++) {}

console.log("Deferred Script Finished");

const status = document.getElementById("status");
const btn = document.getElementById("btn");
console.log(status, btn);

status.textContent = "Deferred script finished.";
status.style.color = "green";

btn.disabled = false;

btn.onclick = function () {
  alert("Deferred Script");
};
