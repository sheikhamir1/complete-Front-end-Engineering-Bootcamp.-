/* 
Prerequisite Knowledge:

    Basic try...catch mechanics (how to catch an error and the concept of throwing).

    JavaScript Object-Oriented Programming (OOP) basics: Classes, constructor(), the extends keyword, and super().

    Understanding of JSON parsing.
    
Learning Roadmap:

    The Built-in Foundation: Understanding the anatomy of the native Error class.

    Creating Custom Errors: How to safely extend Error and override properties like name.

    The Mail Sorter Pattern: Using instanceof to route different custom errors to different recovery logic.

    Deep Hierarchies & Meta-Data: Building sub-classes of custom errors that carry specific payload data (like HTTP status codes or faulty property names).

    Exception Wrapping (Advanced): Using the modern cause property to wrap low-level system errors into high-level business errors (referencing your wrapping.js artifact).

    Final Capstone Project: A complete, real-world application utilizing a full hierarchy of custom errors.

    
*/

// Subtopic 1: The Anatomy of the Built-in Error

/* class Error {
  constructor(message) {
    this.message = message; // "lalala is not defined"
    this.name = "Error"; // The type of error
    this.stack = "..."; // The call stack (where it happened)
  }
    throw new Error("Something bad happened")
} */

// Subtopic 2: Extending the Error Class (Creating Custom Errors)
/* 
class ValidationError extends Error {
  constructor(message) {
    super(message); // 1. Call parent constructor
    this.name = "ValidationError"; // 2. Override the name
  }

  Error: Invalid email
  ValidationError: Invalid email
} */

// Subtopic 3: The Mail Sorter Pattern (Using instanceof)

/* 
err instanceof ValidationError
err.name === "ValidationError"

Check if the error is the expected custom error. If yes, handle it.

Check if it's another known error. If yes, handle it.

If it is an unknown error (like a developer typo), rethrow it (throw err). Let the system crash so developers can fix the bug.


catch(e) { console.log("Failed") }
else { throw err; }
*/

// Subtopic 4: Deep Hierarchies and Extra Data

/* 
class PropertyRequiredError extends ValidationError {
  constructor(property) {
    // We call super() with a formatted message
    super("No property: " + property); 
    this.name = "PropertyRequiredError";
    
    // We add a CUSTOM payload property to our error!
    this.invalidProperty = property; 
  }
} */

//   Exception Wrapping (Advanced Pattern)
/* 
ES2022
try {
   // low level code fails
   throw new ValidationError("Missing ID");
} catch (lowLevelErr) {
   // Wrap it in a high level error!
   throw new ReadError("Failed to fetch profile", { cause: lowLevelErr });
}
*/

/* 
Error Architecture in JS
│
├── 1. The Foundation
│   ├── class Error { message, name, stack }
│   └── Rule: Never throw strings.
│
├── 2. Custom Classes
│   ├── class Custom extends Error
│   ├── super(message) (Generates Stack Trace)
│   └── this.name = "CustomError"
│
├── 3. The Mail Sorter (Polymorphism)
│   ├── catch (err)
│   ├── if (err instanceof CustomError) -> Handle
│   └── else -> throw err (Rethrow Typo Bugs)
│
├── 4. Payloads & Hierarchies
│   ├── class FieldError extends CustomError
│   └── this.faultyField = "email" (Extra Data for UI)
│
└── 5. Exception Wrapping (Layers)
    ├── Low-level fails (Database Error)
    ├── Caught and Wrapped: new AppError(msg, { cause: err })
    └── High-level UI handles AppError, logs AppError.cause
*/
