const bioData = <T>(arg: T): T => {
  return arg;
};

console.log(bioData<string>("human readable"));
console.log(bioData<number>(30));

// A generic class 'GenericNum' where 'T' is a type parameter that can represent any type
class GenericNum<T> {
  // 'zeroValue' is a property of type 'T', used to store a default or initial value
  zeroValue: T;

  // 'add' is a method that takes two arguments of type 'T' and returns a value of type 'T'
  add: (x: T, y: T) => T;

  // The constructor initializes the class with a 'zeroVal' of type 'T' and an 'addFunc' function
  constructor(zeroVal: T, addFunc: (x: T, y: T) => T) {
    // Assign the passed 'zeroVal' to the 'zeroValue' property
    this.zeroValue = zeroVal;

    // Assign the passed 'addFunc' to the 'add' method
    this.add = addFunc;
  }
}

// Create an instance of 'GenericNum' where 'T' is a number
// The 'zeroValue' is initialized to 1, and the 'add' function is defined to add two numbers
let obj1 = new GenericNum<number>(1, (x, y) => x + y);

console.log(` generic num: ${obj1.zeroValue}`);
console.log(`generic add : ${obj1.add(10, 20)}`);

interface lengthContraints<T> {
  value: T;
}
