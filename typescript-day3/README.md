### Functions

In TypeScript, functions are defined with the function keyword and can include type annotations for parameters and the return type. This helps ensure that the function is used correctly according to the defined types.

##### Function Declaration

Here's an example of a function declaration with type annotations:

```typescript
function greet(name: string): string {
  return `Hello, ${name}`;
}
```

name: string specifies that the name parameter must be a string.
string after the parentheses indicates that the function returns a string.

##### Function Expression

You can also define functions using function expressions:

```typescript
const add = (a: number, b: number): number => {
  return a + b;
};
```

This is an arrow function where a and b are numbers, and the function returns a number.

##### Optional and Default Parameters

TypeScript allows you to specify optional and default parameters:

```typescript
function greet(name: string, greeting: string = "Hello"): string {
  return `${greeting}, ${name}`;
}
```

greeting: string = "Hello" indicates that greeting is optional and defaults to "Hello" if not provided.

# TypeScript: `never` vs `void` Functions

## `void` Function

In TypeScript, a function that returns `void` is one that does not return any value. The `void` type is used to indicate that a function will not return anything, and it's typically used for functions that perform side effects.

### Example

```typescript
function logMessage(message: string): void {
  console.log(message);
}

// Usage
logMessage("Hello, TypeScript!");
```

### never Function

A function that returns never is one that never successfully completes. This means that the function will either throw an error. The never type is used to indicate that a function will not terminate normally.

### Example

```typescript
function handleError(message: string): never {
  throw new Error(message);
}

// Usage
handleError("This is an error message.");
```

## Objects in Typescript

In TypeScript, objects can be defined with explicit types. You can define the shape of an object using an interface or a type alias.

##### Object Types with Interfaces

```typescript
interface Person {
  name: string;
  age: number;
}

function UserDetail(person: Person) {
  console.log("My name is " + person.name);
  console.log("My age is " + person.age);
}

// Usage
UserDetail({ name: "Ramesh", age: 21 });
```

In this example, Person is an interface that describes the structure of an object with name and age properties. The UserDetail function also takes an argument of type Person and logs the details to the console.

##### Object Types with Type Aliases

```typescript
type Person = {
  name: string;
  age: number;
};

function UserDetail(pt: Person) {
  console.log("my name is  " + pt.namw);
  console.log("my age is  " + pt.age);
}

UserDetail({ name: "Ramesh", age: 21 });
```

In this example, Person is a type alias for an object with name and age properties. The UserDetail function takes an argument of type Person and logs the details to the console.

##### Optional and Readonly Properties

TypeScript allows you to define optional and readonly properties:

```typescript
interface Person {
  name: string;
  age?: number; // Optional property
  readonly id: number; // Readonly property
}

function UserDetail(person: Person) {
  console.log("My name is " + person.name);
  console.log("My age is " + person.age);
  console.log("My ID is " + person.id);
}

// Usage
const person1: Person = {
  name: "Alice",
  id: 1,
};

const person2: Person = {
  name: "Bob",
  age: 30,
  id: 2,
};

// This will work
UserDetail(person1);
UserDetail(person2);

// person1.id = 3; // Error: Cannot assign to 'id' because it is a readonly property
```

**_Explanation_**
Optional Property: age is marked with a question mark (?), making it optional. This means that an object of type Person may or may not include this property.
Readonly Property: id is marked with readonly, which means it can only be set when the object is created and cannot be modified afterward.

# TypeScript Interview Question

## Question

**Q1: How do you define a function with TypeScript in a React component?**

**_Answer:_**

In TypeScript, you can define the shape of your props and functions using `type` or `interface`. Here’s a simple example of how to define a function .

### 1. **Defining a Function**

To define a function in TypeScript, you can specify the types of parameters and the return type. For example:

```typescript
const greet = (name: string, age?: number): string => {
  return age ? `Hello, ${name}. You are ${age} years old.` : `Hello, ${name}.`;
};
```

**Q2: How do you define an object with TypeScript in a React component? .**

##### Answer

In TypeScript, you can define the shape of an object using a `type` or `interface`, and then use this definition to type-check props or state in a React component.

### 1. **Defining an Object Type**

You can define the shape of an object by creating a `type` or `interface` that describes the properties and their types.

**Example Using `type`:**

```typescript
type User = {
  name: string;
  email: string;
  age?: number; // Optional property
};
```

### 1. **Defining an Object Iterface**

```typescript
interface User {
  name: string;
  email: string;
  age?: number; // Optional property
}
```

Both type and interface achieve the same result in this case. Use the one that best fits your needs.

**Q3: Provide an example that demonstrates defining props using a `type` alias, and then using these props in a functional component.**

**_Answers:_**
Using Props in a React Component
Here’s how you can use these types in a React component:

```tsx
import React from "react";

// Define the props type
type GreetProps = {
  name: string;
  age?: number; // Optional prop
};

// Functional component with props typed directly
const Greet = (props: GreetProps) => {
  const { name, age } = props;

  return (
    <div>
      <h1>Hello, {name}!</h1>
      {age && <p>You are {age} years old.</p>}
    </div>
  );
};

export default Greet;
```

GreetProps defines the shape of the props with name (required) and age (optional).
The Greet component uses this type to enforce what props it expects. It then destructures name and age from props and uses them in the component’s JSX.

**Q4: What is the difference between `type` and `interface` in TypeScript, and when would you use each? Provide examples.**

## Answer

Both `type` and `interface` in TypeScript are used to define the shape of objects and function signatures. Here’s a comparison between the two:
| **Feature** | **`interface`** | **`type`** |
| ----------------------- | -------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| **Declaration Merging** | Supports declaration merging. You can define the same interface multiple times, and they will be merged. | Does not support declaration merging. You cannot define the same `type` multiple times. |
| **Usage** | Generally used to define the shape of objects or classes. | Can define more complex types, including union types, intersection types, and mapped types. |
| **Extending** | Can extend other interfaces using the `extends` keyword. | Can create complex types using intersections (`&`) and unions (`|`). |

### Examples

#### `interface` Example:

```typescript
interface Person {
  name: string;
  age: number;
}

interface Person {
  email: string; // Merged into the existing Person interface
}

const person: Person = {
  name: "Ramesh",
  age: 30,
  email: "ramesh@example.com",
};
```

**Description:** Person interface is defined twice. The second definition merges with the first, adding the email property.

#### `type` Example:

```typescript
type Person = {
  name: string;
  age: number;
};

type ContactInfo = {
  email: string;
  phone?: string;
};

type PersonWithContact = Person & ContactInfo; // Intersection type

const person: PersonWithContact = {
  name: "Ramesh",
  age: 30,
  email: "ramesh@example.com",
  phone: "123-456-7890",
};
```

**Description:** Person and ContactInfo types are combined using an intersection type (&) to create PersonWithContact, which includes all properties from both types.
When to Use Each

**Use interface when:**

You need to define the shape of an object or class.
You might need to extend or merge interfaces in the future.

**Use type when:**

You need to create complex types, including unions, intersections, or mapped types.
You do not need declaration merging.

**Q5: How can you define optional and default parameters in TypeScript functions? Provide examples.**

**_Answer:_**
In TypeScript, you can define optional and default parameters in functions:

**_Optional Parameters:_**

Denoted by adding ? after the parameter name.
**_Example:_**

```typescript
function greet(name: string, age?: number): string {
  return age ? `Hello, ${name}. You are ${age} years old.` : `Hello, ${name}.`;
}

console.log(greet("Ramesh")); // Hello, Ramesh.
console.log(greet("Bishal", 25)); // Hello, Bishal. You are 25 years old.
```

**_Default Parameters:_**

Defined by assigning a default value to the parameter.

**_Example:_**

```typescript
function greet(name: string, age: number = 30): string {
  return `Hello, ${name}. You are ${age} years old.`;
}

console.log(greet("Ramesh")); // Hello, Ramesh.
console.log(greet("Bishal", 25)); // Hello, Bishal. You are 25 years old.
```

**_QN6: How can you specify the return type of a function in TypeScript? Why is it important to do so?_**

**Answer**

In TypeScript, you can specify the return type of a function by adding a type annotation after the function signature.

**_Example:_**

```typescript

function add(a: number, b: number): number {
  return a + b;
}
: number specifies that the function add returns a number.
```

#### Importance of Specifying Return Types in TypeScript

- Improved Code Clarity: Clearly indicates what a function is expected to return.
- Error Detection: Catches type mismatches early in development, reducing runtime errors.
- Enhanced Tooling Support: Improves IDE features like autocompletion and type checking.
- API Design: Serves as a contract for public APIs, aiding users in understanding usage.
- Handling Complexity: Ensures all branches of complex functions return the expected type.
- Documentation: Acts as self-documenting code, making it easier for others to understand function behavior.

**_QN7: How can you use TypeScript’s type system to enforce that a function accepts an object with specific properties? Provide an example._**

**Answer**

You can use TypeScript’s type or interface to define the shape of an object that a function accepts.

**Example:**

```typescript
type User = {
  name: string;
  email: string;
};

function sendWelcomeEmail(user: User): void {
  console.log(`Sending email to ${user.name} at ${user.email}`);
}

const newUser: User = {
  name: "Alice",
  email: "alice@example.com",
};

sendWelcomeEmail(newUser); // Sends email to Alice at alice@example.com
```

User type defines the expected shape of the user object.
sendWelcomeEmail function enforces that its parameter must be an object with name and email properties.

**_QN8: Can you provide an example of using a type alias for a union type in TypeScript and explain how it works?_**

**_Answer_**

A type alias can define union types, which allow a variable to be one of several types.

**_Example:_**

```typescript
type Status = "success" | "error" | "loading";

function updateStatus(status: Status): void {
  if (status === "success") {
    console.log("Operation successful");
  } else if (status === "error") {
    console.log("An error occurred");
  } else {
    console.log("Loading...");
  }
}

updateStatus("success"); // Operation successful
updateStatus("error"); // An error occurred
updateStatus("loading"); // Loading...
```

Status is a union type that can be one of "success", "error", or "loading".
updateStatus function only accepts values that are part of the Status union, ensuring type safety and preventing invalid values.
