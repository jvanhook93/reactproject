import Home from './components/home';
import NavBar from './components/navBar';
import Footer from "./components/footer";
import Catalog from "./components/catalog";
import ShoppingList from './components/shoppingList';
import Cart from './components/cart';
import Admin from './components/admin'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./App.css";

import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />


        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/list" element={<ShoppingList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
        
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

