/* 
Learning Roadmap:

    Subtopic 1: Promisification Basics (Bridging the Past and Future).

    Subtopic 2: Advanced Promisification (Building a Universal Translator).

    Subtopic 3: Microtasks & The Event Loop (The Secret Execution Order).

    Subtopic 4: Unhandled Rejections (Timing and Macrotasks).
*/

// Subtopic 1: Promisification Basics
/* 
callback(err, result)


*/
// Subtopic 2: Advanced Promisification (Universal Helper)

/* 
callback(err, result1, result2)
*/

// Subtopic 3: Microtasks & The Event Loop (The Secret Execution Order)

/* 
The Idea: Imagine a theme park.

    The Call Stack (Main Thread) is the ride itself. It processes one thing at a time.

    The Macrotask Queue (setTimeout, setInterval) is the regular line.

    The Microtask Queue (Promises) is the VIP Fast-Pass line.

If someone is currently on the ride, everyone waits. Once the ride finishes (synchronous code ends), the ride operator looks at the VIP line (Microtasks) first. They let everyone in the VIP line ride until the VIP line is completely empty. Only then do they let one person from the regular line (Macrotasks) ride.

*/

// Subtopic 4: Unhandled Rejections (Timing and Macrotasks)

/* 
1. Promise Rejects.
2. Microtask queue clears.
3. Engine checks for unhandled rejections -> FIRES EVENT.
4. Macrotask queue starts.
5. setTimeout runs -> Attaches .catch() -> Too late, event already fired.


Promisification & Microtasks
├── 1. Promisification
│   ├── Purpose: Convert callback(err, result) to Promises.
│   ├── Mechanism: Return new Promise -> call legacy function -> map to resolve/reject.
│   └── The Helper: Automating wrappers with rest parameters (...args).
└── 2. Execution Queues
    ├── Synchronous Code (Call Stack) -> Executes immediately.
    ├── Microtasks (Promises) -> High priority. Executes when stack is empty.
    └── Macrotasks (setTimeout) -> Low priority. Executes when Microtasks are empty.
        └── Consequence: Errors must be caught before Microtasks empty, or global alarm fires.
*/
