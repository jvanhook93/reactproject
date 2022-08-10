import NavBar from './components/navBar';
import Footer from "./components/footer";
import Catalog from "./components/catalog";
import ShoppingList from './components/shoppingList';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Catalog></Catalog>

      <ShoppingList />
      
      <Footer />
    </div>
  );
}

export default App;

