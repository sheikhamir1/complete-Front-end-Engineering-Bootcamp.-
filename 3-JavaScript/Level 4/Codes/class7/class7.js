// let proxy = new Proxy(target, handler);

// let targetObj = {};

// let transparentProxy = new Proxy(targetObj, {});

// transparentProxy.message = "System Online";
// console.log(targetObj.message);
// console.log(transparentProxy.message);

// get(target,property, receiver)

// let numberArray = [10, 20, 30];

// let safeArray = new Proxy(numberArray, {
//   get(target, property) {
//     if (property in target) {
//       return target[property];
//     } else {
//       return 0;
//     }
//   },
// });

// console.log(safeArray[1]);
// console.log(safeArray[10]);

// let dataStore = [];

// let numberOnlyStore = new Proxy(dataStore, {
//   set(target, property, value) {
//     if (typeof value === "number") {
//       target[property] = value;
//       return true;
//     } else {
//       console.log("The Value your Entered Is Not A Number!");
//       return false;
//     }
//   },
// });
// numberOnlyStore.push(5);
// numberOnlyStore.push(7);
// numberOnlyStore.push("Hello");
// console.log(dataStore);

// let allowedPorts = { start: 8000, end: 8080 };

// let portValidator = new Proxy(allowedPorts, {
//   has(target, property) {
//     return property >= target.start && property <= target.end;
//   },
// });
// console.log(8050 in portValidator);
// console.log(8090 in portValidator);

// function sendRequest(url) {
//   console.log(`Fetching Data Form ${url}`);
// }

// let throttledRequest = new Proxy(sendRequest, {
//   apply(target, thisArg, argumentList) {
//     console.log("System check Before request...");
//     target.apply(thisArg, argumentList);
//   },
// });

// throttledRequest("/api/users");

// ---------------------------------------------------
// let user = {
//   name: "John",
//   _password: "***",
// };

// user = new Proxy(user, {
//   get(target, prop) {
//     if (typeof prop === "string" && prop.startsWith("_")) {
//       throw new Error("Access denied");
//     }
//     return target[prop];
//   },

//   set(target, prop, value) {
//     if (typeof prop === "string" && prop.startsWith("_")) {
//       throw new Error("Access denied");
//     }
//     target[prop] = value;
//     return true;
//   },

//   deleteProperty(target, prop) {
//     if (typeof prop === "string" && prop.startsWith("_")) {
//       throw new Error("Access denied");
//     }
//     delete target[prop];
//     return true;
//   },

//   ownKeys(target) {
//     return Reflect.ownKeys(target).filter(
//       (key) => !(typeof key === "string" && key.startsWith("_")),
//     );
//   },

//   has(target, prop) {
//     if (typeof prop === "string" && prop.startsWith("_")) {
//       return false;
//     }
//     return prop in target;
//   },
// });

// Helper function to show result or error
// function test(description, fn) {
//   try {
//     console.log(`\n${description}`);
//     console.log("Result:", fn());
//   } catch (err) {
//     console.log("Error:", err.message);
//   }
// }

// 1. Read public property ✅
// test("1. Read public property (user.name)", () => user.name);

// // 2. Read private property ❌
// test("2. Read private property (user._password)", () => user._password);

// // 3. Update public property ✅
// test("3. Update public property", () => {
//   user.name = "Mike";
//   return user.name;
// });

// // 4. Update private property ❌
// test("4. Update private property", () => {
//   user._password = "12345";
//   return "Updated";
// });

// // 5. Add public property ✅
// test("5. Add public property", () => {
//   user.age = 25;
//   return user.age;
// });

// // 6. Add private property ❌
// test("6. Add private property", () => {
//   user._secret = "hidden";
//   return "Added";
// });

// 7. Delete public property ✅
// test("7. Delete public property", () => {
//   delete user.age;
//   return user.age;
// });

// // 8. Delete private property ❌
// test("8. Delete private property", () => {
//   delete user._password;
//   return "Deleted";
// });

// // 9. Object.keys() ✅
// test("9. Object.keys()", () => Object.keys(user));

// // 10. for...in loop ✅
// test("10. for...in loop", () => {
//   let keys = [];
//   for (let key in user) {
//     keys.push(key);
//   }
//   return keys;
// });

// // 11. 'in' operator ✅
// test("11. '_password' in user", () => "_password" in user);
// test("12. 'name' in user", () => "name" in user);

// // 13. Bracket notation ❌
// test("13. user['_password']", () => user["_password"]);

// // 14. Non-existing property ✅
// test("14. user.city", () => user.city);

// // 15. Get own property names ✅
// test("15. Object.getOwnPropertyNames()", () =>
//   Object.getOwnPropertyNames(user));

// --------------------------------------------
// Without Reflect:

// obj.name
// obj.name = "Rohan"
// delete obj.name

// With Reflect:

// Reflect.get(obj, "name")
// Reflect.set(obj, "name", "Rohan")
// Reflect.deleteProperty(obj, "name")

// let user = {
//   name: "Rohan",
// };

// let proxy = new Proxy(user, {
//   get(target, property) {
//     console.log("Someone accessed:", property);

//     return target[property];
//   },
// });

// proxy.name;
// let user = {
//   name: "Rohan",
// };

// let proxy = new Proxy(user, {
//   get(target, property) {
//     console.log(`Reading ${property}`);

//     return Reflect.get(target, property);
//   },
// });

// console.log(proxy.name);

// -------------------------------------------

// let userConfig = { theme: "dark" };

// let proxyConfig = new Proxy(userConfig, {
//   get(target, property, receiver) {
//     console.log(`LOG: Read access on '${property}'`);
//     // Safely forward the GET operation
//     return Reflect.get(target, property, receiver);
//   },

//   set(target, property, value, receiver) {
//     console.log(`LOG: Write access on '${property}' -> ${value}`);
//     // Safely forward the SET operation (Reflect.set automatically returns true/false)
//     return Reflect.set(target, property, value, receiver);
//   },
// });

// proxyConfig.theme = "light";
// console.log(proxyConfig.theme);

// let baseUser = {
//   _name: "Guest",
//   get name() {
//     return this._name; // 'this' relies on the context
//   },
// };

// let baseProxy = new Proxy(baseUser, {
//   get(target, prop, receiver) {
//     // MUST use Reflect.get to pass the receiver forward
//     return Reflect.get(target, prop, receiver);
//   },
// });

// // Admin inherits from baseProxy
// let adminUser = {
//   __proto__: baseProxy,
//   _name: "SuperAdmin",
// };

// console.log(adminUser.name);

// -----------------------------------------
// let obj = {};

// let proxy = new Proxy(obj, {});

// console.log(obj === proxy);

// let person = {
//   name: "Rohan",
// };

// let proxy = new Proxy(person, {});

// console.log(person.name);
// console.log(proxy.name);

// console.log(person === proxy);

// let map = new Map();

// map.set("name", "Rohan");

// console.log(map.get("name"));

// let map = new Map();
// // [[setData]]

// let proxy = new Proxy(map, {});

// proxy.set("name", "Rohan");

// this = proxy

// ----------------------------------

// let person = {
//   name: "Rohan",
// };

// let proxy = new Proxy(person, {});
// console.log(proxy.name);

let dataBase = {
  token: "secret123",
};

let { proxy, revoke } = Proxy.revocable(dataBase, {});
console.log(proxy.token);
revoke();
console.log(proxy.token);
