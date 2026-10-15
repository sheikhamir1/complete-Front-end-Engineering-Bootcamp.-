/* 
Learning Roadmap:

    Subtopic 1: Promise.all (The "All or Nothing" approach).

    Subtopic 2: Promise.allSettled (The "Taking Attendance" approach).

    Subtopic 3: Promise.race vs Promise.any (The "Need for Speed" approaches).

    Subtopic 4: Promise.resolve & Promise.reject (Instant state creation for compatibility).
*/

// Subtopic 1: Promise.all (Wait for ALL to succeed)

// Subtopic 2: Promise.allSettled (Wait for ALL to finish, success or fail)
/* 
if fulfilled: { status: "fulfilled", value: result }

If rejected: { status: "rejected", reason: error }
*/

// Subtopic 3: Promise.race vs Promise.any (The Speedsters)

// Subtopic 4: Promise.resolve & Promise.reject (Creating already-settled promises)

/* 
async/await

Promise.resolve(value)

new Promise((resolve) => resolve("hey"));

Promise API (Static Methods)
├── Concurrent Execution (Arrays)
│   ├── Promise.all()
│   │   ├── Fails fast on first rejection.
│   │   └── Resolves with array of values (order preserved).
│   ├── Promise.allSettled()
│   │   ├── Never rejects.
│   │   └── Resolves with array of objects: {status, value/reason}.
│   ├── Promise.race()
│   │   ├── First to settle (success OR fail) wins.
│   │   └── Good for timeouts.
│   └── Promise.any()
│       ├── First to succeed wins.
│       ├── Ignores early failures.
│       └── Throws AggregateError if ALL fail.
└── Static State Creation
    ├── Promise.resolve(value) -> instantly fulfilled.
    └── Promise.reject(error) -> instantly rejected.
*/
