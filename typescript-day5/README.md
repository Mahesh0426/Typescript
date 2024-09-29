# Generic in TypeScript

In TypeScript, generics provide a way to create reusable components that can work with a variety of types, instead of being restricted to a single data type. Generics allow you to write a function, class, or interface that works with different types without losing type safety.

## Why Use Generics?

Generics allow you to create flexible and reusable components that can work with any data type, while still enforcing type safety. They enable you to define a component once and use it with different types, avoiding code duplication.

### Example: Generic Function

Here’s a simple example of a function that uses a generic type:

```typescript
function identity<T>(value: T): T {
  return value;
}

// Usage with different types
let num = identity<number>(10); // num will be of type number
let str = identity<string>("Hello"); // str will be of type string
```

In this example, identity is a generic function. The <T> represents the generic type. When you call identity, you can specify the type (number, string, etc.), and TypeScript will ensure that the input and output match that type.

## Example: Generic Class

Generics can also be used in classes:

```typescript
class Box<T> {
  content: T;

  constructor(value: T) {
    this.content = value;
  }

  getContent(): T {
    return this.content;
  }
}

// Usage with different types
let numberBox = new Box<number>(100);
let stringBox = new Box<string>("TypeScript");
```

Here, Box<T> is a generic class that can hold and return a value of any type T.

### Example: Generic Interface

Generics can also be applied to interfaces:

```ts
interface Pair<T, U> {
  first: T;
  second: U;
}

const pair: Pair<string, number> = {
  first: "Age",
  second: 30,
};
```

In this case, Pair<T, U> defines an interface with two generic types T and U, and you can define different types when using the interface.

```typescript
function printLength<T extends { length: number }>(value: T): void {
  console.log(value.length);
}

// This works because strings have a length property
printLength("Hello");

// This will cause a compile-time error because numbers do not have a length
// printLength(123);  // Error!
```

In this example, the generic T is constrained to types that have a length property. This means only types like arrays, strings, or objects with a length property can be passed to printLength.
