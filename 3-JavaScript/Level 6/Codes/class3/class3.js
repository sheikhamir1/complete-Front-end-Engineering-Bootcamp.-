/* 
Learning Roadmap

    The Problem: Synchronous vs. Asynchronous execution (Why code doesn't wait).

    The Solution: Introduction to Callbacks.

    Handling Errors: The Error-First Callback Pattern.

    The Trap: Callbacks in Callbacks (The Pyramid of Doom).

    The Flawed Fix: Named functions and the transition to modern solutions. 
    


    
    */

// Subtopic 1: The Problem - Code Doesn't Wait

// Subtopic 2: The Solution - Callbacks

// Subtopic 3: Handling Errors - The "Error-First" Callback
/* 
callback(error, null)
callback(null, data)
*/

// Subtopic 4: Callback in Callback (The Pyramid of Doom)

// Subtopic 5: The Flawed Fix & The Real Solution

/* 
Asynchronous JavaScript
│
├── 1. The Problem: Synchronous Blocking
│   └── JS is single-threaded; waiting freezes the browser.
│
├── 2. The Solution: Delegation to Browser APIs
│   └── The Event Loop handles background tasks.
│
├── 3. Handling Completion: Callbacks
│   ├── Definition: Passing a function to be executed later.
│   └── Pattern: Error-First Convention callback(err, data).
│
└── 4. The Limitation: Sequential Execution
    ├── Symptom: Deep Nesting (Pyramid of Doom / Callback Hell).
    ├── Flawed Fix: Named top-level functions (Spaghetti code).
    └── Modern Fix: Promises and Async/Await (Next steps in your learning).
*/
