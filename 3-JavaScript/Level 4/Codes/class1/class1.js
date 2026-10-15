// function NewUser(name) {
//   this.name = name;
// }

// let newUser1 = new NewUser("Rahul");
// console.log(newUser1);

// class User {
//   constructor(name) {
//     this.name = name;
//   }

//   sayHi() {
//     console.log(`Hello ${this.name}`);
//   }
// }

// let user1 = new User("Rohan");
// console.log(User.prototype.sayHi);
// console.log(typeof User);
// console.log(User === User.prototype.constructor);

// IMP Use
// let User = class MyClass {
//   sayHi() {
//     console.log(MyClass);
//   }
// };
// new User().sayHi();

// function makeClass(phrase) {
//   return class {
//     sayHi() {
//       console.log(phrase);
//     }
//   };
// }
// let DynamicUser = makeClass("Hello From Dynamic User");
// new DynamicUser().sayHi();

// class User {
//   constructor(name) {
//     this.name = name;
//   }

//   get name() {
//     return this._name;
//   }

//   set name(value) {
//     if (value.length < 4) {
//       console.log("Name is too Short!");
//       return;
//     }
//     this._name = value;
//   }

//   ["say" + "Hi"]() {
//     console.log(`i am Dynamic Named Method`);
//   }
// }

// let user1 = new User("Rohan ali");
// user1.name = "AI Rohan";
// console.log(user1.name);
// user1.sayHi();

// class User {
//   name = "Rohan";

//   sayHi() {
//     console.log(`Hello ${this.name}`);
//   }
// }

// let user1 = new User();
// user1.sayHi();
// console.log(User.prototype.name);

class Button {
  constructor(value) {
    this.value = value;
  }

  //   click() {
  //     console.log(`click ${this.value}`);
  //   }

  click = () => {
    console.log(`${this.value}`);
  };
}

let btn1 = new Button("Hello");
// btn1.click();
setTimeout(btn1.click, 1000);
