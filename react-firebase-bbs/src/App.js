import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { BBsMain, Footer, Header, MainNav } from "./comps";
import BBsWrite from "./comps/BBsWrite";
import BBsDetail from "./comps/BBsDetail";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <MainNav />
        <section className="main_section">
          <Route exact path="/" component={BBsMain} />
          <Route exact path="/write" component={BBsWrite} />

          <Route exact path="/detail/:id" component={BBsDetail} />
        </section>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
