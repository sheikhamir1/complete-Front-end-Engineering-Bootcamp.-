/* 
Learning Roadmap:

    Subtopic 1: Generator Functions & Syntax (The Basics of Pausing).

    Subtopic 2: Generators as Iterables (Looping and the return gotcha).

    Subtopic 3: Generator Composition (Nesting generators with yield*).

    Subtopic 4: Yield is a Two-Way Street (Passing data into the generator).

    Subtopic 5: Throw & Return (External error handling and early termination).
*/

/* 
function test() {
  console.log("A");
  console.log("B");
  console.log("C");
}
const gen = test();


What is Generators?
function*

function* myGenerator() {
  yield 1;
  yield 2;
  yield 3;
}
const gen = myGenerator();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

Why Not Just Use a Normal Function?

function getNumbers() {
  const arr = [];

  for (let i = 1; i <= 1000000000; i++) {
    arr.push(i);
  }

  return arr;
}


function* numbers() {
  let i = 1;

  while (true) {
    yield i++;
  }
}

const gen = numbers();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

This is called lazy evaluation.



const allRecords = loadEverything();

function* records() {
  // yield one record at a time
}

for (const record of records()) {
  process(record);
}

*/

// Subtopic 1: Generator Functions & Syntax

// Subtopic 2: Generators are Iterable

// Subtopic 3: Generator Composition

/* 
yield*
*/

// Subtopic 4: Yield is a Two-Way Street

// Subtopic 5: Throw & Return

/* 
JavaScript Generators
├── 1. Core Syntax
│   ├── function* (Declaration)
│   ├── yield (Pauses and outputs value)
│   └── .next() (Resumes execution)
├── 2. Output Format
│   └── Object: { value: <data>, done: <boolean> }
├── 3. Iterable Integration
│   ├── Works automatically with for..of and [...]
│   └── Gotcha: Loops ignore final 'return' values.
├── 4. Advanced Control Flow
│   ├── yield* (Delegates to another generator)
│   ├── .next(value) (Passes data IN to the generator)
│   ├── .return(value) (Terminates instantly)
│   └── .throw(error) (Injects exception to internal try..catch)
*/
