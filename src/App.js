import "./App.css";
import NavBar from './components/navBar';
import Footer from "./components/footer";
import Catalog from "./components/catalog";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Catalog></Catalog>
      
      <Footer />
    </div>
  );
}

export default App;

