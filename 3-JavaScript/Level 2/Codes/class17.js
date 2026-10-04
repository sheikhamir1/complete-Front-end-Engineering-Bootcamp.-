// let now = new Date();
// console.log(now);

// new Date(milliseconds)
// let milli = new Date(0);
// let milli = new Date(24 * 3600 * 1000);
// console.log(milli);

// creating date form string
// let date = new Date("2026-02-5");
// console.log(date);

// let date = new Date(2020, 0, 1, 0, 0, 0, 0);
// let date = new Date(2020, 0, 1);
// console.log(date);

// methods
// let date = new Date();
// console.log(date.getHours());
// console.log(date.getUTCHours());
// console.log(date.getDate());
// console.log(date.getDay());
// console.log(date.getFullYear());
// console.log(date.getMinutes());
// console.log(date.getSeconds());

// set date components
// let today = new Date();

// today.setHours(0);
// today.setHours(0, 0, 0, 0);
// console.log(today);

// autocorrection
// let date = new Date(2020, 0, 32);
// console.log(date);

// let x = new Date();
// console.log(x.getDate());

// let date = new Date(2016, 1, 28); // increase by 2+
// date.setDate(date.getDate() + 2);
// console.log(date);

// date to number
// let date = new Date(); // it is same as date.getTime()
// console.log(+date);

// this technique is useful for measuring perfomance

// let start = new Date();
// for (let i = 0; i < 100000; i++) {
//   let doSomething = i * i * i;
// }
// let end = new Date();
// console.log(`The Loop tooks ${end - start} ms`);

// let start = Date.now();
// for (let i = 0; i < 100000; i++) {
//   let doSomething = i * i * i;
// }
// let end = Date.now();
// console.log(`The Loop tooks ${end - start} ms`);

// let date1 = new Date(2024, 0, 1);
// let date2 = new Date(2024, 0, 3);

// function diffSubstract(date1, date2) {
//   return date2 - date1;
// }
// function diffGetTime(date1, date2) {
//   return date2.getTime() - date1.getTime();
// }

// function bench(func) {
//   let date1 = new Date(0);
//   let date2 = new Date();
//   let start = new Date();

//   for (let i = 0; i < 100000; i++) {
//     func(date1, date2);
//   }
//   return new Date() - start;
// }

// let time1 = 0;
// let time2 = 0;

// for (let i = 0; i < 10; i++) {
//   time1 += bench(diffSubstract);
//   time2 += bench(diffGetTime);
// }

// console.log("Total time for DiffSubtract: " + time1 + "ms");
// console.log("Total time for DiffGetTime: " + time1 + "ms");

// let ms = Date.parse("2012-01-26T13:51:50.417-07:00");

// console.log(ms);
// // 1327611110417 (timestamp)

// // We can instantly create a new Date object from the timestamp:
// let date = new Date(Date.parse("2012-01-26T13:51:50.417-07:00"));

// console.log(date);

// console.log(`Loading started ${performance.now()}ms ago`);
