const loadBtn = document.getElementById("loadBtn");
const statusText = document.getElementById("status");

loadBtn.addEventListener("click", function () {
  // 1. Check if we already loaded it to prevent loading twice
  if (document.getElementById("confettiScript")) {
    fireConfetti();
    return;
  }

  statusText.textContent = "Downloading library from CDN...";
  loadBtn.disabled = true;

  // 2. Create the script element dynamically
  let script = document.createElement("script");
  // We are using a real, popular confetti library from a CDN
  script.src =
    "https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js";
  script.id = "confettiScript";

  // Best Practice for external scripts: Allow error reading
  script.crossOrigin = "anonymous";

  // 3. The 'onload' event: The file downloaded AND executed successfully
  script.onload = function () {
    statusText.textContent = "Library loaded successfully!";
    loadBtn.disabled = false;
    loadBtn.textContent = "Fire Again!";
    // Now that it's loaded, we can use the global variable it provides
    fireConfetti();
  };

  // 4. The 'onerror' event: The network failed or the URL is wrong (e.g., 404)
  script.onerror = function () {
    statusText.textContent =
      "Failed to load the library. Check your connection.";
    statusText.classList.add("error");
    loadBtn.disabled = false;
  };

  // 5. Append it to the document to trigger the download
  // NOTE: Dynamic scripts act like 'async' by default!
  document.head.append(script);
});

// A wrapper function to call the library
function fireConfetti() {
  // 'confetti' is a function provided by the library we just downloaded
  if (typeof confetti === "function") {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  }
}
