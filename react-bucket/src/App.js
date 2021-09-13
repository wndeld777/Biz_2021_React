import "./App.css";
import BucketMain from "./comps/BucketMain";
import Footer from "./comps/Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>MY BUCKET LIST</h1>
      </header>
      <BucketMain />
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
