// export const supportLanguages = ["en", "es", "fr"];

// export function initalizeSystem() {
//   console.log(`System booting up...`);
// }

// export class SystemUser {
//   constructor(userName) {
//     this.userName = userName;
//   }
// }

// ----------------------------------------

// import { SystemUser, initalizeSystem, supportLanguages } from "./app.js";
// initalizeSystem();

// import * as tool from "./app.js";
// console.log(tool);
// // console.log(Object.prototype.toString.call(tool));
// tool.initalizeSystem();

// import { initalizeSystem as BootUp, SP } from "./app.js";
// BootUp();
// console.log(SP);

// ----------------------------------------
// import authTool from "./auth.js";

// let user1 = new authTool();
// user1.login("Rohan");

// import {validate} from "./core/auth/utils/validate.js"

// 1. Re-export named items
// export { login, logout } from "./internal/session.js";

// // 2. Re-export a default item (Must be converted to a named export!)
// export { default as User } from "./models/userModel.js";

// -------------------------------------------

// const downloadButton = document.getElementById("dl-btn");

// downloadButton.addEventListener("click", async () => {
//   console.log("Button clicked. Fetching heavy PDF generator module...");

//   // The pdfGenerator.js file is NOT downloaded until this exact moment
//   try {
//     const pdfTools = await import("./pdfGenerator.js");

//     // Accessing a named export
//     pdfTools.generatePDF("Invoice_Data");

//     // Accessing a default export (it lives on the .default property)
//     // pdfTools.default();
//   } catch (error) {
//     console.error("Failed to load the module.", error);
//   }
// });
