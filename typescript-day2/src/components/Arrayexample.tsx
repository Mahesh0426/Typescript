//ARRAY TYPES
//const stringArray: string[] = ["apple", "banana", "cherry"];

//Using the generic Array type:
//let names: Array<string> = ["apple", "banana", "cherry"];

const ArrayExamplesComponent = () => {
  // String array
  const fruits: string[] = ["Apple", "Banana", "Orange"];

  // Number array
  const numbers: Array<number> = [1, 2, 3, 4, 5];

  // Mixed type array
  const mixed: (string | number)[] = ["Hello", 42, "World", 100];

  //Tuples array
  const tuple: [string, number] = ["ramesh", 21];

  // Array of objects
  interface Person {
    name: string;
    age: number;
  }
  const people: Person[] = [
    { name: "Bishal", age: 21 },
    { name: "ramesh", age: 20 },
    { name: "susil", age: 19 },
  ];

  // Array operations
  const doubledNumbers = numbers.map((num) => num * 2);
  const evenNumbers = numbers.filter((num) => num % 2 === 0);
  const sum = numbers.reduce((acc, curr) => acc + curr, 0);

  return (
    <div>
      <h2>TypeScript Array Examples in React</h2>

      <h3>String Array:</h3>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>

      <h3>Number Array:</h3>
      <p>{numbers.join(", ")}</p>

      <h3>Mixed Type Array:</h3>
      <p>{mixed.join(", ")}</p>

      <h3>Tuple Array:</h3>
      <p>{tuple.join(", ")}</p>

      <h3>Array of Objects:</h3>
      <ul>
        {people.map((person, index) => (
          <li key={index}>
            {person.name} - {person.age} years old
          </li>
        ))}
      </ul>

      <h3>Array Operations:</h3>
      <p>Doubled numbers: {doubledNumbers.join(", ")}</p>
      <p>Even numbers: {evenNumbers.join(", ")}</p>
      <p>Sum of numbers: {sum}</p>
    </div>
  );
};

export default ArrayExamplesComponent;
