/* 
By the end of this journey, you won’t just know what the syntax looks like—you will understand exactly how the JavaScript engine processes errors, how to prevent your applications from crashing, and how to build resilient, professional-grade software. */

/* *Learning Roadmap:*

1. *The Basics:* The structure of try...catch and the difference between Runtime vs. Syntax errors.

2. *The Error Object:* Extracting vital debugging data (name, message, stack).

3. *The Synchronous Gotcha:* Why try...catch fails with asynchronous code like setTimeout and how to fix it.

4. *Advanced Mastery:* Throwing custom errors and utilizing the finally cleanup block.

5. *Capstone Project:* A complete, real-world application utilizing everything learned. */

/*Expected Outcomes: After completing this guide, you will be able to confidently anticipate where your code might fail, catch those failures silently, log helpful debugging information, and keep your user interface running smoothly without catastrophic crashes. */

// Subtopic 1: The Basic Structure of try...catch

// code

// try {
//     // Code that might fail
// } catch (err) {
//     // Code that runs ONLY if an error occurs
// }

// code

/* 
*Crucial Rule: Runtime vs. Syntax Errors*
try...catch is a runtime mechanism. It only works if the code is valid JavaScript that the engine can successfully read (parse) before running.

* *Runtime Errors (Exceptions):* These happen while the code is running (e.g., trying to use a variable that hasn't been created). try...catch *will* catch these.

* *Syntax Errors:* These happen when your code has a typo (e.g., a missing curly brace }). The engine cannot even read the code, so it crashes before the code ever starts running. try...catch *cannot* catch syntax errors. */

// Subtopic 2: The Error Object

/* 
Common Mistakes and Best Practices

* *Mistake:* Exposing err.stack to normal users on your live website. It looks ugly and can expose security vulnerabilities regarding how your code is structured.

* *Best Practice:* Show users a friendly message, but log the err.stack in your developer console or send it to your backend. */

// Subtopic 3: The Synchronous Catch (The setTimeout Gotcha)

// console.log("1. Order coffee");
// console.log("3. Serve coffee");
// console.log("2. Make coffee (takes 3 minutes)"); // Everything freezes here
// console.log("4. Next customer!");

/* This is Asynchronous JavaScript. It allows the code to start a long task (like downloading an image, waiting for a timer, or asking a database for user info), set it aside, and keep running the rest of the code. We call this non-blocking. */

/* 
JavaScript uses an *Event Loop*.

1. The engine reads the try block and sees setTimeout(callback, 1000).

2. It sends the callback to the Web APIs (the browser's timer) and immediately finishes the try block.

3. 1000ms later, the timer pushes the callback onto the call stack.

4. The callback executes. At this point, the engine is in a completely new execution context. The original try context was destroyed 1000ms ago. */

// try {
//     setTimeout(function() {
//         badCode(); // App crashes! Bodyguard went home!
//     }, 1000);
// } catch (err) { ... }

// setTimeout(function() {
//     try {
//         badCode(); // Caught! Bodyguard is inside the kitchen!
//     } catch (err) { ... }
// }, 1000);

// Subtopic 4: Throwing Custom Errors & The finally Block

// Subtopic 5: Real-World Use Case — JSON Parsing

// Subtopic 6: Rethrowing Errors (The Mail Sorter)

// Subtopic 7: Global Catch
