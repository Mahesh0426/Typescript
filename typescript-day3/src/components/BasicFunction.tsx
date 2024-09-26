type cal = {
  onClick: (message: string) => void;
};

const Greet = (props: cal) => {
  const { onClick } = props;

  // create simple function  which show name email
  const signup = (name: string, email: string, IsStudent: boolean) => {
    alert(`Hello, ${name} your email is ${email}.
        are you student ? ${IsStudent ? "Yes" : "No"}`);
  };

  // Create a simple function to add two numbers and return the result.
  const add = (num: number): number => {
    return num;
  };
  //  function to calculate even numbers between 0 to 10
  const getEvenNumbers = () => {
    const evens: number[] = [];
    for (let i = 0; i <= 10; i++) {
      if (i % 2 === 0) {
        evens.push(i);
      }
    }
    return evens.join(", "); // return them as a string, comma-separated
  };

  // function to calculate average numbers between 0 and 10
  const getAverage = () => {
    let sum: number = 0;
    for (let i = 0; i <= 10; i++) {
      sum += i;
    }
    return sum / 11;
  };

  return (
    <div>
      <h1>user details</h1>
      <button onClick={() => signup("ramesh", "ramesh@example.com", true)}>
        Click me
      </button>
      <p>The sum of 1 and 2 is: </p>
      <button onClick={() => onClick(`${add(1 + 2)}`)}>Click me</button>
      <p>even number between 0 to 10 </p>
      <button onClick={() => onClick(getEvenNumbers())}>Click me</button>
      <p>The average of 0 to 10 is: </p>
      <button onClick={() => onClick(`${getAverage().toFixed(2)}`)}>
        Click me
      </button>
    </div>
  );
};

export default Greet;
