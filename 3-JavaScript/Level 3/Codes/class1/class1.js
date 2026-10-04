// function name() {
//   console.log("this is Name FUN");
//   age();
// }

// function age() {
//   console.log("this is age FUN");
// }

// name();

// Recursion

// function pow(x, n) {
//   if (n == 1) {
//     return x;
//   } else {
//     return x * pow(x, n - 1);
//   }
// }

// console.log(pow(2, 4));

// using Loop

// function pow1(x, n) {
//   let result = 1;

//   for (let i = 0; i < n; i++) {
//     result *= x;
//   }
//   return result;
// }

// console.log(pow1(2, 3));

// ---------------------------------------------------
// const company = {
//   sales: [
//     { name: "John", salary: 1000 },
//     { name: "Alice", salary: 1600 },
//   ],

//   development: {
//     sites: [
//       { name: "Peter", salary: 2000 },
//       { name: "Alex", salary: 1800 },
//     ],

//     internals: [{ name: "Jack", salary: 1300 }],
//   },
// };

// function sumSalaries(dept) {
//   if (Array.isArray(dept)) {
//     return dept.reduce((sum, person) => sum + person.salary, 0);
//   } else {
//     let sum = 0;

//     for (let subDept of Object.values(dept)) {
//       sum += sumSalaries(subDept);
//     }
//     return sum;
//   }
// }
// console.log("Total Salary =", sumSalaries(company));
