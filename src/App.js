import "./App.css";
import { Games } from "./components/Games/Games";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Games />
    </div>
  );
}

export default App;
