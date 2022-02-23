import "./App.css";
import Timer from "./components/Timer";
import ButtonGroup from "./components/ButtonGroup";
import LapsContainer from "./components/LapsContainer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Timer />
        <ButtonGroup />
        <LapsContainer />
      </header>
    </div>
  );
}

export default App;
