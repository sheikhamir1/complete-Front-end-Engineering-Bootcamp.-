/* 
Learning Roadmap:

    Subtopic 1: The Safety Net (Understanding .catch()).

    Subtopic 2: The Invisible Shield (Implicit try...catch and accidental errors).

    Subtopic 3: Flow Control (Rethrowing and Error Recovery).

    Subtopic 4: The Global Alarm (Handling unhandled rejections).
*/

// Subtopic 1: The Safety Net (Understanding .catch())

// Subtopic 2: The Invisible Shield (Implicit try...catch)

// Subtopic 3: Flow Control (Rethrowing and Error Recovery)

// Subtopic 4: The Ultimate Safety Net (Unhandled Rejections)

/* 
Promise Error Handling
├── 1. The .catch() Method
│   ├── Catches explicit reject()
│   ├── Skips all intervening .then() blocks
│   └── Centralizes error logic at the bottom of chains
├── 2. Implicit Try...Catch
│   ├── Wraps executors and handlers automatically
│   └── Catches thrown errors & accidental typos
├── 3. Flow Control (Rethrowing)
│   ├── Analyze error with `instanceof`
│   ├── Recover: `return` a value to resume the .then() chain
│   └── Fail: `throw` to pass down to the next .catch()
└── 4. Global Safety Net
    ├── window.addEventListener('unhandledrejection')
    └── Catches promises that forgot to include a .catch()
*/
