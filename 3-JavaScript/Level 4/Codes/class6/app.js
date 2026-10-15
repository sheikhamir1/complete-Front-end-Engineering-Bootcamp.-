const supportLanguages = ["en", "es", "fr"];

function initalizeSystem() {
  console.log(`System booting up...`);
}

class SystemUser {
  constructor(userName) {
    this.userName = userName;
  }
}

export { supportLanguages as SP, initalizeSystem, SystemUser };
