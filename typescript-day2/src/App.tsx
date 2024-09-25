import "./App.css";
import ArrayExamplesComponent from "./components/Arrayexample";
import ArrayTypesDemo from "./components/ArrayTypesDemo";
import PrimitiveTypes from "./components/PrimitiveTypesDemo";

function App() {
  // Example user data
  const user = {
    name: "Mahesh",
    age: 21,
    isActive: true,
    address: "123 Main St",
    // phoneNumber:38264283,
    // phoneNumber is omitted
    lastLogin: new Date(),
  };

  // Example user data array
  const users = [
    { name: "Ramesh", age: 21, email: "ramesh@gmail.com" },
    { name: "Bishal", age: 20, email: "bishal@gmail.com" },
  ];

  return (
    <div className="flex">
      {/*  optional | Passing user data as props directly  using spread */}
      {/* <PrimitiveTypes {...user}/> */}
      <PrimitiveTypes
        name={user.name}
        age={user.age}
        isActive={user.isActive}
        address={user.address}
        lastLogin={user.lastLogin}
      />
      {/* array types */}
      <ArrayTypesDemo users={users} />
      <ArrayExamplesComponent />
    </div>
  );
}

export default App;
