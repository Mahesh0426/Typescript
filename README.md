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
  name: "Alice",
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
  name: "John Doe",
  age: 30,
  employeeId: 12345,
  department: "IT",
};
```
