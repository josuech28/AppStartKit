'use strict';

class myModule {

    constructor() {
        console.log("Module created!");
    }
    consoleMe(txt) {
        console.log(txt);
    }
    alertMe(txt) {
        alert(txt);
    }
}

const myModuleInstance = new myModule();
myModuleInstance.consoleMe("Everything is working, enjoy the app!");
