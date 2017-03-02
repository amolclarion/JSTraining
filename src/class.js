"use strict";

class User {
    constructor() {
        this.firstName = "amol";
        this.lastName = "Dongare";
    }
    getFullName() { // NOTE: static method
        return this.firstName + ' ' + this.lastName;
    }
    get area() { // NOTE: prototype method
        return "Dont know";
    }
    testMsg() {
        return "I am test message";
    }
}

class UserDetails extends User {
    constructor() {
        super();
        this.address = "pune";
    }
    getAddress() {
        return this.address;
    }
}

var details = new UserDetails();
jQuery(".classes > .output").append(jQuery("<div>").html("Hey your name is :  " + details.getFullName()))
