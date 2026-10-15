// class Employee {
//   constructor(name) {
//     this.name = name;
//   }

//   clockIn() {
//     console.log(`${this.name} has Clocked In`);
//   }

//   work() {
//     console.log(`Completing Daily Tasks.`);
//   }
// }

// class Manager extends Employee {
//   constructor(name, department) {
//     super(name);
//     this.department = department;
//   }
//   approveLeave() {
//     console.log(`${this.name} Approved the Leave Request.`);
//   }

//   work() {
//     super.work();
//     console.log(`Reviewing Team Preformance`);
//   }
// }

// let manager1 = new Manager("Sarah", "Engineering");
// console.log(manager1);
// manager1.clockIn();
// manager1.approveLeave();
// console.log(manager1.name);

// let boss = new Manager();
// boss.work();

// --------------------------------------

// class BaseConfig {
//   type = "Basic";
//   constructor() {
//     console.log(`Config Type is:${this.type}`);
//   }
// }

// class AdminConfig extends BaseConfig {
//   type = "Admin";
// }

// new AdminConfig();

// Because of context loss during deep inheritance chains. If Object C inherits from Object B, and Object B inherits from Object A:

// Object C calls B.method(). Inside that method, this evaluates to Object C.

// Object B tries to call this._proto_.method().

// Because this is still Object C, this._proto_ points back to Object B.

// Object B accidentally calls itself again. Loop forever.

// The Infinite Loop Example (What happens if we don't use super)
// let parent = {
//   execute() {
//     console.log("Parent execution");
//   },
// };

// let child = {
//   _proto_: parent,
//   execute() {
//     this.__proto__.execute.call(this);
//   },
// };

// let grandChild = {
//   _proto_: child,
//   execute() {
//     this.__proto__.execute.call(this);
//   },
// };

// grandChild.execute();

// let baseUser = {
//   role: "User",
//   getRole() {
//     console.log("Base Role");
//   },
// };

// let admin = {
//   __proto__: baseUser,
//   getRole() {
//     super.getRole();
//   },
// };

// let baseGuest = {
//   role: "Guest",
//   getRole() {
//     console.log("Guest Role");
//   },
// };

// let externalAgent = {
//   __proto__: baseGuest,
//   getRole: admin.getRole,
// };
// externalAgent.getRole();
