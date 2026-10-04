// describe("pow", function () {
//   // First Case
//   it("2^3 = 8", function () {
//     assert.equal(pow(2, 3), 8);
//   });

//   // Second Case
//   it("3^4 = 81", function () {
//     assert.equal(pow(3, 4), 81);
//   });

//   // Third Case
//   it("5^7 = 78125", function () {
//     assert.equal(pow(5, 7), 78125);
//   });
// });

// Testing With Loop
// describe("pow", function () {
//   for (let x = 1; x <= 10; x++) {
//     it(`${x}^5 =${x * x * x * x * x}`, function () {
//       assert.equal(pow(x, 5), x * x * x * x * x);
//     });
//   }
// });

// Nested Testing

// describe("pow", function () {
//   describe("Raises x To The Power 3", function () {
//     for (let x = 1; x <= 5; x++) {
//       it(`${x}^3 =${x * x * x}`, function () {
//         assert.equal(pow(x, 3), x * x * x);
//       });
//     }
//   });
// });

describe("demo hooks", function () {
  before(() => console.log("All tests starting"));
  after(() => console.log("All tests finished"));

  beforeEach(() => console.log("Before a test"));
  afterEach(() => console.log("After a test"));

  it("test 1", () => console.log("Running test 1"));
  it("test 2", () => console.log("Running test 2"));
});
