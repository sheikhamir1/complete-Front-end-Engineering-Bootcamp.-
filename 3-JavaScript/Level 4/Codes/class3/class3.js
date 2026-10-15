// class User {
//   static totalUserCreated = 0;

//   constructor(userName) {
//     this.userName = userName;
//     User.totalUserCreated++;
//   }

//   getUserName() {
//     return this.userName;
//   }
// }

// let user1 = new User("Rohan");
// let user2 = new User("Rahul");
// console.log(user1.getUserName());
// // console.log(user2);
// console.log(User.totalUserCreated);

// --------------------------------------
// class ServerRequest {
//   constructor(url, method) {
//     this.url = url;
//     this.method = method;
//   }

//   static createPostRequest(url) {
//     return new ServerRequest(url, "POST");
//   }
//   static createGetRequest(url) {
//     return new ServerRequest(url, "GET");
//   }
// }

// let loginRequest = ServerRequest.createPostRequest("/api/login");
// console.log(loginRequest.method);

// class File {
//   constructor(name, sizeInMB) {
//     this.name = name;
//     this.sizeInMB = sizeInMB;
//   }

//   static compareSize(fileA, fileB) {
//     return fileA.sizeInMB - fileB.sizeInMB;
//   }
// }

// let files = [new File("Video.mp4", 500), new File("document.txt", 2)];

// files.sort(File.compareSize);
// console.log(files[0].name);

// ---------------------------------------------

// class Database {
//   static connectionType = "TCP";

//   static connect() {
//     console.log(`Connecting via ${this.connectionType}`);
//   }
// }

// class PostgresDB extends Database {}

// console.log(PostgresDB.connectionType);
// PostgresDB.connect();

// -------------------------------------------

// class UserAccount {
//   constructor(userName) {
//     this.userName = userName;
//     this._accessLevel = 1;
//   }

//   set accessLevel(level) {
//     if (level < 1 || level > 5) {
//       console.log(`Error: Access Level Must Be Between 1 And 5`);
//       return;
//     }
//     this._accessLevel = level;
//   }

//   get accessLevel() {
//     return this._accessLevel;
//   }
// }

// let account = new UserAccount("Rohan");
// console.log(account);
// account.accessLevel = 6;
// console.log(account.accessLevel);

// ----------------------------------------

// class PaymetProcesser {
//   #apiKey = "secret123";
//   #transactionLimit = 5000;

//   #validateAmount(amount) {
//     if (amount > this.#transactionLimit) {
//       return false;
//     }
//     return true;
//   }

//   processPayment(amount) {
//     if (this.#validateAmount(amount)) {
//       console.log(`Processing $${amount} using key:${this.#apiKey}`);
//     } else {
//       console.log(`Transaction Failed: Amount Exceeds limit.`);
//     }
//   }
// }

// let payment = new PaymetProcesser();
// // payment.processPayment(100);
// // console.log(payment.#apikey);
// // payment.#validateAmount(100);

// -------------------------------------------------

// function calculateTotal(...numbers) {
//   let total = 0;
//   for (let num of numbers) {
//     total += num;
//   }
//   return total;
// }

// console.log(calculateTotal(10, 20, 30));
// console.log(calculateTotal(5, 5));

// function assignProject(projectName, manager, ...teamMembers) {
//   console.log("Project: " + projectName);
//   console.log("Manager: " + manager);

//   // teamMembers is now an array of whatever is left over
//   console.log("Team Array: ", teamMembers);
// }

// assignProject("Website Redesign", "Sarah", "John", "Mike", "Emma");

// ------------------------------------------------
// let scores = [85, 92, 78, 99, 4];

// // console.log(Math.min(scores));
// console.log(Math.min(...scores));

// let frontendTech = ["React", "Vue"];
// let backendTech = ["Node", "Python"];

// let fullStack = [...frontendTech, "SQL", ...backendTech];

// console.log(fullStack);

// let baseSettings = ["Dark Mode", "Auto-Save"];

// let userSettings = [...baseSettings];

// userSettings.push("Notifications On");

// console.log(baseSettings);
// console.log(userSettings);

// let defaultUser = {
//   theme: "Light",
//   role: "Guest",
//   sessionTime: 30,
// };

// // 1. Unpack defaultUser properties
// // 2. Overwrite the 'role' property
// // 3. Add a new 'id' property
// let loggedInUser = {
//   ...defaultUser,
//   role: "Admin",
//   id: 991,
// };

// console.log(loggedInUser);
