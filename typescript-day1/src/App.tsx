import "./App.css";
import UserName from "./components/useName";

function App() {
  const handleOnClick = (message: String) => {
    alert(message);
  };
  return (
    <>
      <h1>TypeScript</h1>
      <UserName name="mahesh" onClick={handleOnClick} />
    </>
  );
}

export default App;
