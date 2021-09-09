import "./App.css";
import MainNav from "./comps/MainNav";
import Header from "./comps/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import BBsMain from "./comps/BBsMain";
import BBsWrite from "./comps/BBsWrite";
import Footer from "./comps/Footer";
function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Header />
        </header>

        <MainNav />
        <Route path="/" component={BBsMain} exact />
        <Route path="/write" component={BBsWrite} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
