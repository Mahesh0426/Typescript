"use strict";
// class User {
//   email: string;
//   name: string;
//   constructor(email: string, name: string) {
//     this.name = name;
//     this.email = email;
//   }
// }
// const mahesh = new User("mahesh", "mahesh@gmail.com");
// console.log(mahesh);
class User {
    constructor(userID, name, email) {
        this.userID = userID;
        this.name = name;
        this.email = email;
        this._count = 3;
        this.city = "netown";
    }
    //private method
    generateToken() {
        console.log("generating token..");
    }
    //getter method
    get getAppleEmaily() {
        return ` apple${this.city}`;
    }
    //getter method
    get courseCount() {
        return this._count;
    }
    //setter method
    set courseCount(courseNum) {
        if (courseNum >= 1) {
            throw new Error("Course count should be greater than 1");
        }
        this._count = courseNum;
    }
}
//inheritance
class subUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._count = 2;
    }
}
const mahesh = new User("1234", "mahesh", "mahesh@gmail.com");
// mahesh.generateToken()
console.log(mahesh);
const subMahesh = new subUser("5678", "subMahesh", "subMahesh@gmail.com");
console.log(subMahesh);
