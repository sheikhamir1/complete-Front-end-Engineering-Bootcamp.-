/* 
Roadmap of Topics Covered:

    Subtopic 1: Fundamentals of Promise Chaining (The Basics & The Newbie Error)

    Subtopic 2: Controlling Flow (Returning Promises & Thenables)

    Subtopic 3: Real-World Application (The Fetch API & Refactoring)
*/
// Subtopic 1: Fundamentals of Promise Chaining
/* 
promise.then(); 
promise.then();

promise.then().then().then()


*/

// Subtopic 2: Controlling Flow (Returning Promises & Thenables)

// Subtopic 3: Real-World Application (The Fetch API & Refactoring)

/* 
Promise Chaining
├── 1. The Core Mechanic
│   ├── .then() always returns a new Promise
│   └── Values returned inside .then() become the result for the next link
├── 2. Controlling the Flow
│   ├── Returning plain values -> Instant execution of next step
│   └── Returning Promises / Thenables -> Pauses chain until resolved
├── 3. Architecture & Best Practices
│   ├── Avoid attaching multiple handlers to one Promise (Not a chain!)
│   ├── Always return a Promise from async actions (Keeps chain extendable)
│   └── Extract steps into reusable functions (Clean code)
└── 4. Real-World Usage
    └── Fetch API -> response.json() -> DOM Updates -> Timers
*/
