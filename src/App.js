import "./App.css";
import NavBar from './components/navBar';
import Footer from "./components/footer";
import AboutMe from  "./components/aboutMe";
import Catalog from "./components/catalog";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Catalog></Catalog>
    
      <AboutMe />
      
      <Footer />
    </div>
  );
}

export default App;

