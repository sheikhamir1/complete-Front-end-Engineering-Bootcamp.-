"use strict";

// Step 1.

// let baseCharacter = {
//   canWalk: true,
//   hp: 100,
// };

// let warrior = Object.create(baseCharacter);
// warrior.swordDamage = 50;

// console.log(warrior);
// console.log(Object.getPrototypeOf(warrior));

// let flyingCharacter = {
//   canFly: true,
// };
// Object.getPrototypeOf(warrior, flyingCharacter);
// console.log(flyingCharacter);

// step 2.
// let baseRobot = {
//   power: "On",
// };
// let bossRobot = Object.create(baseRobot, {
//   name: {
//     value: "Destroyer 9000",
//     writable: false,
//     enumerable: true,
//   },
//   laserDamage: {
//     value: 500,
//     writable: true,
//     enumerable: true,
//   },
// });

// console.log(bossRobot.power);
// console.log(bossRobot.name);
// // bossRobot.name = "Friendly Bot";

// let prefectClone = Object.create(
//   Object.getPrototypeOf(bossRobot),
//   Object.getOwnPropertyDescriptors(bossRobot),
// );

// console.log(prefectClone);
// console.log(Object.getOwnPropertyDescriptors(prefectClone));

// Step 3.
// let inventory = {};

// let itemKey = "Sword";
// let itemValue = "Iron";

// inventory[itemKey] = itemValue;
// console.log(inventory["Sword"]);

// let inventory = {};

// let hackerKey = "__proto__";
// let hackerValue = "Poison";

// inventory[hackerKey] = hackerValue;
// console.log(inventory["__proto__"]);

// step 4.
// Object.create(null);

// let inventory = Object.create(null);

// let hackerKey = "__proto__";
// let hackerValue = "Poison";

// inventory[hackerKey] = hackerValue;
// console.log(inventory["__proto__"]);

// inventory.apple = 1;
// console.log(inventory);
// console.log(Object.keys(inventory));

// step 5 ES6.
// let moderninventory = new Map();

// moderninventory.set("__proto__", "Posion");
// console.log(moderninventory.get("__proto__"));
// console.log(moderninventory);

// ----------------------------------------
// let baseRobot = {
//   power: "On",
// };

// let obj = Object.create(null);

// // alert(obj);
// console.log(obj);
