// import "./App.css";
import { ContextProvider } from "./context";
import Gameboard from "./components/Gameboard";

function App() {
  return (
    <ContextProvider>
      <div className="App">
        <Gameboard />
      </div>
    </ContextProvider>
  );
}

export default App;
