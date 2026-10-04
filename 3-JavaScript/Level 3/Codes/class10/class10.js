// let user = {};
// console.log(user.toString());
// Object.prototype;

// step 1.
// __proto__

// let animal = {
//   eats: true,
//   walk: true,
// };

// let rabbit = {
//   jumps: true,
// };

// rabbit.__proto__ = animal;

// console.log(rabbit.jumps);
// console.log(rabbit.eats);
// console.log(rabbit.walk);

// step 2.
// let animal = { eats: true };
// let rabbit = { jump: true, __proto__: animal };
// let longEarRabbit = { earLength: 10, __proto__: rabbit };

// // longEarRabbit->rabbit->animal

// console.log(longEarRabbit.earLength);
// console.log(longEarRabbit.jump);
// console.log(longEarRabbit.eats);

// step 3.
// let animal = { eats: true };
// let rabbit = { __proto__: animal };
// console.log(rabbit.eats);
// console.log((rabbit.eats = false));
// console.log(rabbit);
// console.log(animal);

// -----------------------------------------------

// let user = {
//   name: "Rohan",
//   surname: "Ali",
//   get fullName() {
//     return `${this.name} ${this.surname}`;
//   },
//   set fullName(value) {
//     [this.name, this.surname] = value.split(" ");
//   },
// };

// let admin = { __proto__: user, isAdmin: true };

// // console.log(admin.fullName);
// admin.fullName = "Aliya khan";
// console.log(admin);
// console.log(user);

// -------------------------------------------------

// let animal = {
//   walk() {
//     if (!this.isSleeping) alert(`I walk`);
//   },
//   sleep() {
//     this.isSleeping = true;
//   },
// };

// let rabbit = { name: "White Rabbit", __proto__: animal };

// // modifies rabbit.isSleeping, NOT animal.isSleeping
// rabbit.sleep();

// alert(rabbit.isSleeping); // true
// alert(animal.isSleeping); // undefined

// console.log(animal);
// console.log(rabbit);

// ------------------------------------------------

// let animal = { eats: true };
// let rabbit = { jump: true, __proto__: animal };
// let longEarRabbit = { earLength: 10, __proto__: rabbit };

// longEarRabbit->rabbit->animal

// console.log(longEarRabbit.earLength);
// console.log(longEarRabbit.jump);
// console.log(longEarRabbit.eats);

// for (let prop in longEarRabbit) {
//   console.log(prop);
// }
// console.log(Object.keys(longEarRabbit));

// for (let prop in longEarRabbit) {
//   let isOwn = longEarRabbit.hasOwnProperty(prop);

//   if (isOwn) {
//     console.log(`Our: ${prop}`);
//   } else {
//     console.log(`Inherited: ${prop}`);
//   }
// }
