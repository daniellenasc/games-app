import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { Games } from "./components/Games/Games";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Games />
      <Footer />
    </div>
  );
}

export default App;
