import Header from "./components/Header/index.js";
import Buttons from "./components/Buttons/index.js";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Buttons />
      <div className="footer">
        Made with <span>React</span> at <span>Le Reacteur</span> by{" "}
        <span>Adeline</span>
      </div>
    </div>
  );
}

export default App;
