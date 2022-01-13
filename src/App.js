import "./App.css";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "./Link";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Weather App</h1>
        <Weather />
        <Link />
      </header>
    </div>
  );
}

export default App;
