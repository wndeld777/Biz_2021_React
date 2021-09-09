import "./App.css";
import MainNav from "./comps/MainNav";
import Header from "./comps/Header";
import { BrowserRouter, Route } from "react-router-dom";
import BBsMain from "./comps/BBsMain";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <MainNav />
        <BBsMain />
      </div>
    </BrowserRouter>
  );
}

export default App;
