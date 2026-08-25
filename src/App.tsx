import Button from "./components/Button";

function App() {
  return (
    <div>
      <Button color="primary" onClick={() => console.log("Button clicked!")}>
        My Button
      </Button>
    </div>
  );
}

export default App;
