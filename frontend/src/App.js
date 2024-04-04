import "./App.css";
import Forecast from "../src/components/Forecast/Forecast";
import Temperature from "./components/Temperature/Temperature";
import Search from "./components/Search/Search";

function App() {
  return (
    <div className="App">
      <Search />
      <Temperature />
      <Forecast />
    </div>
  );
}

export default App;
