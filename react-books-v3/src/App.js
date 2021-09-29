import logo from "./logo.svg";
import "./App.css";
import MainNav from "./comps/MainNav";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <MainNav />
      </div>
    </BrowserRouter>
  );
}

export default App;
