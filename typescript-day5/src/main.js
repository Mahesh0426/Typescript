"use strict";
const bioData = (arg) => {
    return arg;
};
console.log(bioData("human readable"));
console.log(bioData(30));
// A generic class 'GenericNum' where 'T' is a type parameter that can represent any type
class GenericNum {
    // The constructor initializes the class with a 'zeroVal' of type 'T' and an 'addFunc' function
    constructor(zeroVal, addFunc) {
        // Assign the passed 'zeroVal' to the 'zeroValue' property
        this.zeroValue = zeroVal;
        // Assign the passed 'addFunc' to the 'add' method
        this.add = addFunc;
    }
}
// Create an instance of 'GenericNum' where 'T' is a number
// The 'zeroValue' is initialized to 1, and the 'add' function is defined to add two numbers
let obj1 = new GenericNum(1, (x, y) => x + y);
console.log(` generic num: ${obj1.zeroValue}`);
console.log(`generic add : ${obj1.add(10, 20)}`);
