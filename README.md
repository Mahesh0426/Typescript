# TypeScript

## What is TypeScript?

TypeScript is like a super-powered version of JavaScript. It adds extra features to JavaScript, mainly a system for handling types.

## What are Types?

Types are labels that tell us what kind of data we're working with. For example:

- Is it a number?
- Is it a piece of text (a string)?
- Is it true or false (a boolean)?

## Why Use TypeScript?

1. **Catches Mistakes Early**: It helps find errors in your code before you run it.
2. **Better Code Hints**: It gives you better suggestions as you type.
3. **Clearer Code**: It makes your code easier to understand.

## How TypeScript Works

### 1. Guessing Types

TypeScript is smart. It can often guess what type something is:

```typescript
let greeting = "Hello"; // TypeScript knows this is a string
```

### 2. Defining Types

to create an object with an inferred type which includes name: string and age: number, you can write:

```typescript
const user = {
  name: "Hari",
  age: 24,
};
```

You can explicitly describe this object's shape using an type declaration:

```typescript
type User {
  name: string
  age: number;
}
```

If you provide an object that doesn’t match the interface you have provided, TypeScript will warn you:

```typescript
interface User {
  name: string;
  id: number;
}

const user: User = {
  username: "Hari",
Object literal may only specify known properties, and 'username' does not exist in type 'User'.
  age: 24,
};
```

### 3. Creating Custom Types

You can create your own types for more complex things:

```typescript
interface Person {
  name: string;
  age: number;
}

let user: Person = {
  name: "Ramesh",
  age: 30,
};
```

# Types and Interfaces in TypeScript

TypeScript provides two main ways to define custom types: `type` aliases and `interfaces`. Both allow you to create reusable, named types, but they have some differences in capabilities and use cases.

### Type

Type create a new name for a type. They can be used to name primitives, unions, tuples, and any other types.

### Example:

```typescript
// Simple type alias
type UserID = number;

// Object type
type User = {
  id: UserID;
  name: string;
  email: string;
};

// Union type
type Status = "pending" | "approved" | "rejected";

// Function type
type Callback = (data: string) => void;
```

### Interfaces

Interfaces are primarily used to define object shapes. They can be extended and implemented by classes.

### Example:

```typescript
interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  employeeId: number;
  department: string;
}

// Usage
const john: Employee = {
  name: "Ramesh",
  age: 30,
  employeeId: 12345,
  department: "IT",
};
```

# 1. TypeScript Primitive Types

TypeScript supports several primitive types that serve as the basic building blocks for more complex data structures. Here's an explanation of the main primitive types in TypeScript with examples:

## Number

The `number` type represents both integer and floating-point values.

```typescript
let integer: number = 42;
let float: number = 3.14;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
```

## String

The string type represents textual data.

```typescript
let singleQuote: string = 'Hello';
let doubleQuote: string = "World";
let templateLiteral: string = `Hello, ${singleQuote}!`;
```

## Boolean

The boolean type represents a logical value of true or false.

```typescript
let isTrue: boolean = true;
let isFalse: boolean = false;
```

## Undefined

The undefined type represents a variable that has been declared but not assigned a value.

```typescript
let notAssigned: undefined = undefined;
let implicitUndefined: undefined;
```

## Null

The null type represents an intentional absence of any object value.

```typescript
let nullValue: null = null;
```

# 2. TypeScript Array Types

Both methods are functionally equivalent, but the square bracket notation is more commonly used due to its conciseness.
In TypeScript, there are two main ways to declare array types:

### i. Using square brackets notation:

```typescript
let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ["Alice", "Bob", "Charlie"];
```

### ii. Using the generic Array type:

```typescript
let numbers: Array<number> = [1, 2, 3, 4, 5];
let names: Array<string> = ["Alice", "Bob", "Charlie"];
```

#### String Array

```typescript
let fruits = ["Apple", "Orange", "Banana"]; // inferred as string[]
```

#### Number array

```typescript
let numbers: Array<number> = [1, 2, 3, 4, 5];
```

#### Mixed types

You can create arrays with multiple types using union types:

```typescript
let mixed: (string | number)[] = ["Hello", 42, "World"];
```

#### Readonly arrays

You can make arrays readonly to prevent modifications:

```typescript
let readonlyNumbers: readonly number[] = [1, 2, 3];
```

#### Tuple types

For arrays with a fixed number of elements of known types:

```typescript
let tuple: [string, number] = ["hello", 10];
```

#### Array of objects

```typescript
interface Person {
  name: string;
  age: number;
}
const people: Person[] = [
  { name: "Bishal", age: 21 },
  { name: "ramesh", age: 20 },
  { name: "susil", age: 19 },
];
```

# 3. The `any` Type in TypeScript

The `any` type is a special type in TypeScript that represents a value of any type. It's essentially a way to opting out of type checking for a particular value or variable.

### Usage

```typescript
let anyValue: any = 4;
anyValue = "hello"; // no error
anyValue = true; // no error
anyValue = [1, 2, 3]; // no error
```

**_Example:_**

```typescript
let v: any = true;

v = "string"; // no error as it can be "any" type

// no type error in the editor, but will still throw an error if uncommented

console.log(Math.round(v)); // no error as it can be "any" type
// Output: NaN
```

# 4. Unknown Type in TypeScript

The `unknown` type is a safer alternative to `any` in TypeScript. It represents values of an unknown type, providing better type safety while still allowing flexibility.

## Key Features

1. **Type Safety**: Unlike `any`, `unknown` enforces type checking.
2. **Assignment**: Any value can be assigned to an `unknown` type.
3. **Usage Restrictions**: Operations on `unknown` values require type checking or assertion.

## Comparison with `any`

| Feature       | `unknown`                        | `any`                     |
| ------------- | -------------------------------- | ------------------------- |
| Type Safety   | Yes                              | No                        |
| Assignability | Can be assigned any value        | Can be assigned any value |
| Operations    | Restricted without type checking | Unrestricted              |

## Usage Examples

### Basic Assignment

```typescript
let value: unknown;

value = true; // OK
value = 42; // OK
value = "Hello"; // OK
value = []; // OK
value = {}; // OK
value = null; // OK
value = undefined; // OK

// Using unknown values requires type checking
if (typeof value === "string") {
  console.log(value.toUpperCase()); // OK
}

// This would cause a compile-time error
// console.log(value.toUpperCase());
```

# 5 .Union Types in TypeScript

Union types in TypeScript allow a variable to hold values of multiple types. It is represented using the | (pipe) symbol between types. This feature is useful when a value could be one of several types.

**Syntax**

```typescript

let variable: type1 | type2 | type3;
This means that variable can hold a value of type1, type2, or type3.
```

**_Example 1: Union Type with Basic Types_**
In this example, the variable value can be either a string or a number.

```typescript

let value: string | number;

value = "Hello";  // OK
value = 42;       // OK
// value = true;  // Error: Type 'boolean' is not assignable to type 'string | number'
Here, value can only accept string or number. Trying to assign a boolean would throw a TypeScript error.
```

**_Example 2: Union Types in Functions_**
Union types can also be used in function parameters and return types. This allows functions to accept or return different types of values.

```typescript

function formatInput(input: string | number): string {
    if (typeof input === "string") {
        return `String: ${input}`;
    } else {
        return `Number: ${input}`;
    }
}

console.log(formatInput("TypeScript"));  // Output: String: TypeScript
console.log(formatInput(2024));          // Output: Number: 2024
In the function formatInput, the parameter input can be either a string or number, and the function handles each case accordingly.
```

**_Example 3: Union Types in Arrays_**
Union types can be used with arrays, allowing an array to contain elements of multiple types.

```typescript

const mixedArray: (string | number)[] = [1, "thor", 2, "hulk"];

mixedArray.push(3);        // OK
mixedArray.push("ironman"); // OK
// mixedArray.push(true);  // Error: Argument of type 'boolean' is not assignable to type 'string | number'.

console.log(mixedArray);   // Output: [1, "thor", 2, "hulk", 3, "ironman"]
In this example, the array mixedArray can contain both string and number values. Trying to push a boolean would result in a TypeScript error.
```

**\*Example: Union of Arrays**
You can also define a union of arrays where the variable can be either an array of one type or another.

```typescript

let unionOfArrays: number[] | string[];

unionOfArrays = [1, 2, 3];         // OK
unionOfArrays = ["a", "b", "c"];   // OK
// unionOfArrays = [1, "a", 2];    // Error: Type '(string | number)[]' is not assignable to type 'number[] | string[]'.
Here, unionOfArrays can either be an array of number or an array of string, but not a mix of both at the same time.
```

**_Example 4: Union Type with Type Aliases_**
You can also use type aliases to create reusable union types, which can simplify your code.

```typescript
// Union type for different types using type aliases
type Users = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

// Initial object is of type Users
let mahesh: Users | Admin = {
  name: "Mahesh",
  id: 1,
};

// Changing the object to type Admin
mahesh = {
  username: "admin",
  id: 2,
};

// Output the object
console.log(mahesh);
// output  username: "admin",
//    id: 2,
```

**_Explanation:_**

- Users: A type alias for an object with name and id.
- Admin: A type alias for an object with username and id.
- The variable mahesh can be of either type Users or Admin due to the union type Users | Admin.
- Initially, mahesh is of type Users, but later, it's reassigned to an Admin object..

**_Example 5: Union Type in Function Return Types_**
A function can also return a union type, meaning it could return values of different types based on the input or logic.

```typescript
function getValue(flag: boolean): string | number {
  if (flag) {
    return "Success";
  } else {
    return 404;
  }
}

const result1 = getValue(true); // result1 is inferred as string | number
const result2 = getValue(false); // result2 is inferred as string | number
```

In this example, the function getValue returns either a string or a number based on the flag parameter.

**_Example 6: Union Types with Interfaces_**
Union types can also be used with complex types like interfaces.

```typescript
interface Cat {
  name: string;
  purrs: boolean;
}

interface Dog {
  name: string;
  barks: boolean;
}

type Pet = Cat | Dog;

const myPet: Pet = { name: "Whiskers", purrs: true }; // OK (Cat type)
const anotherPet: Pet = { name: "Fido", barks: true }; // OK (Dog type)
// const invalidPet: Pet = { name: "Milo" }; // Error: Property 'purrs' is missing in type but required in 'Cat' or 'barks' is missing in 'Dog'
```

Here, Pet is a union of Cat and Dog. A variable of type Pet must match either the Cat interface or the Dog interface.

# 6.tuple in TypeScript

A tuple in TypeScript is a special type of array that allows you to have a fixed number of elements, where each element can be of a different type.

**_Here’s a simple breakdown:_**

- Fixed Size: Unlike regular arrays where you can add or remove elements, a tuple has a fixed number of elements.
- Different Types: Each element in a tuple can be a different type. For example, you can have a tuple that contains a number, a string, and a boolean.
  **_Example_**

```typescript
// Define a tuple type
let person: [string, number, boolean];

// Initialize the tuple
person = ["Alice", 30, true];

// Accessing elements
let name: string = person[0]; // "Alice"
let age: number = person[1]; // 30
let isActive: boolean = person[2]; // true
```

**_Explanation_**

- Type Definition: [string, number, boolean] defines a tuple type where the first element must be a string, the second element must be a number, and the third element must be a boolean.
- Fixed Elements: person must always have exactly three elements in this order: a string, a number, and a boolean.

# 7 Enun in typescript

In TypeScript, an enum is a way to give friendly names to a set of numeric or string values. Enums make it easier to work with sets of related constants and improve code readability.

### i.Numeric Enums

By default, TypeScript enums are numeric. This means that each member of the enum is assigned a number.

**_Example_**

```typescript
enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}

let move: Direction = Direction.Up;
console.log(move); // Output: 1
```

**_Explanation_**

- enum Direction: Defines an enum named Direction.
- Up = 1: The Up member is assigned the value 1. Subsequent members will have values incremented by 1 automatically.
- Down: By default, Down will be 2, Left will be 3, and Right will be 4.
- Direction.Up: Refers to the numeric value 1.
- String Enums : String enums are a more explicit way to handle string values.

**_Example_**

```typescript
enum Response {
  Yes = "YES",
  No = "NO",
}

let answer: Response = Response.Yes;
console.log(answer); // Output: "YES"
```

**_Explanation_**

- enum Response: Defines an enum named Response.
- Yes = "YES": The Yes member is assigned the string "YES".
- No = "NO": The No member is assigned the string "NO".
- Response.Yes: Refers to the string "YES".

# 8. what is inteface in TypeScript?

In TypeScript, an interface is a way to define the structure of an object. It tells TypeScript what properties and types an object should have

### Why use interfaces?

- It helps catch errors during development by ensuring objects match the expected structure.
- t makes your code more readable and easier to understand.

# 9. what is Reopening Interfaces

Reopening an interface means that you can declare the same interface multiple times, and TypeScript will automatically merge the declarations. This allows you to extend an interface without needing to redefine it or create a new one.

#### Example:

```typescript
interface User {
  id: number;
  name: string;
}

// Reopening the User interface to add more properties
interface User {
  email: string;
}

const user1: User = {
  id: 1,
  name: "John",
  email: "john@example.com",
};

console.log(user1);
```

#### Explanation:

In this example, the User interface is defined twice. The second declaration "reopens" the interface and adds a new property email.
TypeScript merges the two declarations into a single interface with id, name, and email.

# 10 what is Inheritance in Interfaces

Inheritance in interfaces allows you to create a new interface that inherits properties from one or more existing interfaces. This helps in sharing common properties across different interfaces and keeps your code organized.

#### Example:

```typescript
interface Person {
  id: number;
  name: string;
}

interface Employee extends Person {
  position: string;
  salary: number;
}

const employee1: Employee = {
  id: 101,
  name: "Alice",
  position: "Software Developer",
  salary: 5000,
};

console.log(employee1);
```

#### Explanation:

The Person interface defines two properties: id and name.
The Employee interface extends Person, meaning it inherits id and name from Person, and also adds its own properties position and salary.
employee1 is an object of type Employee, and it must have all four properties: id, name, position, and salary.
