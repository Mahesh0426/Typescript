import "./App.css";
import Greet from "./components/BasicFunction";
import UserProfile from "./components/BasicObject";

function App() {
  const handleOnClick = (message: String) => {
    alert(message);
  };

  return (
    <>
      <Greet onClick={handleOnClick} />
      <hr />
      <UserProfile
        user={{
          name: "Ramesh",
          languages: ["English", "nepali", "hindi"],
          hobbies: ["coding", "workout", "reading"],
          _id: 12345,
          age: 21,
          isAdmin: true,
          address: {
            city: "sydney",
            state: "NSW",
            zip: 2000,
          },
        }}
      />
    </>
  );
}

export default App;
