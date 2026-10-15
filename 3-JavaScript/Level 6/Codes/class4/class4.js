/* 
Learning Roadmap

    The Foundation: The Promise Constructor and Internal States.

    Consuming Results: Using .then, .catch, and .finally to handle outcomes.

    Bridging the Gap: Promisifying legacy callback functions (Real-world loadScript).

*/

// Subtopic 1: The Promise Constructor & States
/* 
let promise = new Promise(function(resolve, reject) {
  // Executor: The producing code (the "singer")
});

resolve(value)
reject(error)
reject(new Error(error))


"pending"	= undefined	Initial state. The executor is working.
"fulfilled"	= value	resolve(value) was called successfully.
"rejected"	= error	reject(error) was called due to failure.

When a promise is no longer "pending" (it is either fulfilled or rejected), we call it settled.
*/

// Subtopic 2: Consumers - then, catch, and finally
/* 
.then(onSuccess)
.catch(onError)

.then(null, onError)

.finally(onFinally)

promise.then(...).catch(...).finally(...)
*/

// Subtopic 3: Real-World Example - loadScript
/* 
This technique is called Promisification.

Promises in JavaScript
│
├── 1. Anatomy of a Promise
│   ├── Constructor: new Promise((resolve, reject) => { ... })
│   ├── State: "pending" -> "fulfilled" OR "rejected"
│   └── Result: undefined -> value OR error object
│
├── 2. Consuming the Outcome
│   ├── .then(handler)    : Triggers on fulfillment (success)
│   ├── .catch(handler)   : Triggers on rejection (error)
│   └── .finally(handler) : Triggers always (cleanup)
│
└── 3. Practical Usage
    ├── Modern API usage (e.g., fetch returns a Promise)
    └── Promisification (Wrapping legacy callbacks)
*/
