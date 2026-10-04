// Step 1.
// function SmartPhone(model) {
//   this.model = model;
//   this.takePhoto = function () {
//     console.log(`${this.model} says: Click! Photo taken`);
//   };
// }

// let phone1 = new SmartPhone("Galaxy S24");
// let phone2 = new SmartPhone("Pixel 8");

// phone1.takePhoto();

// step 2.
// function SmartPhone(model) {
//   this.model = model;
// }

// // Blueprint (Handles SHARED Data And Methods for All The Phones)
// SmartPhone.prototype.takePhoto = function () {
//   console.log(`${this.model} says: Click! Photo taken`);
// };

// let phone1 = new SmartPhone("Galaxy S24");
// let phone2 = new SmartPhone("Pixel 8");

// phone1.takePhoto();
// phone2.takePhoto();

// console.log(phone1);
// // console.log(phone2);

// step 3.

// function SmartPhone(model) {
//   this.model = model;
// }

// SmartPhone.prototype.takePhoto = function () {
//   console.log(`${this.model} says: Click! Photo taken`);
// };

// let phone1 = new SmartPhone("Galaxy S24");
// let phone2 = new SmartPhone("Pixel 8");
// let myPhone = new SmartPhone("iPhone 15");

// SmartPhone.prototype.connectWIFI = function () {
//   console.log(`${this.model} is Now Connected To Internet`);
// };

// myPhone.connectWIFI();
// phone1.takePhoto();
// phone2.takePhoto();
// phone1.connectWIFI();

// step 4.

// function SmartPhone(model) {
//   this.model = model;
// }

// // BLUEPRINT-A
// SmartPhone.prototype.takePhoto = function () {
//   console.log("click");
// };

// // Build Phone 1
// let phone1 = new SmartPhone("Phone 1");

// // BLUEPRINT-B
// SmartPhone.prototype = {
//   playMusic: function () {
//     console.log("Playing Music");
//   },
// };

// // Build Phone 2
// let phone2 = new SmartPhone("Phone 2");

// The Result
// phone1.takePhoto();
// phone1.playMusic();
// phone2.playMusic();
// phone2.takePhoto();

// step 5.

// function SmartPhone(model) {
//   this.model = model;
// }
// // SmartPhone.prototype = {
// //   constructor: SmartPhone,
// // };
// SmartPhone.prototype = {
//   takePhoto: function () {
//     console.log("Click");
//   },
// };
// let phone1 = new SmartPhone("Phone 1");
// console.log(phone1.constructor === SmartPhone);

// Bonus Step

// let RegularFunc = function () {};
// console.log(RegularFunc.prototype);

// let ArrowFunc = () => {};
// console.log(ArrowFunc.prototype);
