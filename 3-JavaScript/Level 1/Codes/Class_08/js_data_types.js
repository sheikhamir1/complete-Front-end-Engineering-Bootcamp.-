/**
 * =============================
 * Big Picture Context
 * =============================
 * In programming, data types tell us what kind of value we are dealing with.
 * JavaScript has 8 basic data types:
 *   - 7 primitive types (simple, indivisible values)
 *   - 1 non-primitive type (object) that can hold collections and complex entities
 *
 * Think of it like cooking:
 *   - Primitive types → raw ingredients (salt, flour, sugar)
 *   - Object → full recipes (bread, cake) built from those ingredients
 */

/**
 * =============================
 * 1. Number
 * =============================
 * Represents integers and floating-point numbers.
 */
let yourAge = 19; // integer
let discount = 12.5; // float

// Special values:
console.log(1 / 0); // Infinity
console.log("abc" / 2); // NaN (Not a Number)

// ✅ Pros: Easy arithmetic, flexible.
// ❌ Cons: Precision issues with very big or very small numbers.
// Scenario: Shopping cart prices, but big values can fail.

/**
 * =============================
 * 2. BigInt
 * =============================
 * For really big integers beyond 2^53 - 1.
 */
const huge = 987654321987654321987654321n;
console.log(huge);

// ✅ Pros: Precise for cryptography, banking, timestamps.
// ❌ Cons: Cannot mix with normal numbers directly.
// Scenario: Tracking nanoseconds in scientific simulation.

/**
 * =============================
 * 3. String
 * =============================
 * Represents text.
 */
let name = "Ali";
let greet = `Hello, ${name}`; // Template literal with interpolation
console.log(greet);

// ✅ Pros: Easy to manipulate, combine, and display.
// ❌ Cons: Can become memory-heavy with very large text.
// Scenario: Chat app messages, notifications.

/**
 * =============================
 * 4. Boolean
 * =============================
 * Logical yes/no values.
 */
let isLoggedIn = true;
let isAdmin = false;

if (isLoggedIn) {
  console.log("Show dashboard");
} else {
  console.log("Show login page");
}

// ✅ Pros: Perfect for decision making.
// ❌ Cons: Truthy/falsy conversions can confuse beginners.

/**
 * =============================
 * 5. Null
 * =============================
 * Special type meaning nothing / deliberately empty.
 */
let middleName = null;
console.log(middleName); // null

// ✅ Pros: Explicitly means "no value yet".
// ❌ Cons: typeof null === "object" (historical JS bug).
// Scenario: Middle name not provided.

/**
 * =============================
 * 6. Undefined
 * =============================
 * Variable declared but not assigned.
 */
let age;
console.log(age); // undefined

// ✅ Pros: Tells you variable not initialized.
// ❌ Cons: Overlaps with null, sometimes confusing.
// Scenario: Form field left empty by user.

/**
 * =============================
 * 7. Symbol
 * =============================
 * Unique identifiers.
 */
let id = Symbol("id");
let id2 = Symbol("id");
// console.log(id === id2); // false

// ✅ Pros: Guaranteed uniqueness, useful for hidden object keys.
// ❌ Cons: Not used in everyday coding.
// Scenario: Metadata in libraries without clashing with keys.

/**
 * =============================
 * 8. Object (non-primitive)
 * =============================
 * Collection of key-value pairs.
 */
let user = {
  name: "Fatima",
  age: 22,
  courses: ["web dev", "DS"],
};
console.log(user);

// ✅ Pros: Flexible, store complex data.
// ❌ Cons: Mutability can cause bugs.
// Scenario: Student record, user profile, API responses.

/**
 * =============================
 * typeof Operator
 * =============================
 * Used to check the type of a value.
 */
console.log(typeof 42); // "number"
console.log(typeof "hello"); // "string"
console.log(typeof null); // "object" (bug)
console.log(typeof Symbol()); // "symbol"

/**
 * =============================
 * Pros and Cons Overview
 * =============================
 * - Primitive types: fast, simple → one single value.
 * - Object: powerful, flexible → can model real-world entities.
 *
 * Dynamic typing in JS:
 * - JS variables can change type at runtime.
 * ✅ Makes JS flexible.
 * ❌ Can cause runtime bugs if not careful.
 */
