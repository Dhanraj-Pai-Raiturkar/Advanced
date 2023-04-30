import ClickCounter from "./ClickCounter";
import HoverCounter from "./HoverCounter";
import './App.css';
import Counter from "./Counter";

function App() {
  return (
    <div className="app">
      <Counter
        render = {(counterHandler, count) => <ClickCounter counterHandler={counterHandler} count={count} />}
      />
      <Counter
        render = {(counterHandler, count) => <HoverCounter counterHandler={counterHandler} count={count} />}
      />
    </div>
  );
}

export default App;
