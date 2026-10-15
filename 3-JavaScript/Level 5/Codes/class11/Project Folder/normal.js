console.log("Normal Script Started");

// Simulate heavy work
// for (let i = 0; i < 500000000; i++) {}

console.log("Normal Script Finished");

const status = document.getElementById("status");
const btn = document.getElementById("btn");

status.textContent = "Normal script finished.";
status.style.color = "red";

btn.disabled = false;

btn.onclick = function () {
  alert("Normal Script");
};
