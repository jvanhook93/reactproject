import "./catalog.css";
import Product from "./product";
import { useEffect, useState } from 'react';
import DataService from '../services/dataService';

const Catalog = () => {
  const [products, setProducts] = useState([]);

  const loadData = () => {
    let service = new DataService(); //instance of the class
    let prods = service.getCatalog();
    setProducts(prods);
  };

  useEffect(() => {
    loadData();
  }, []);


  return (
    <div className="catalog">
      <h1>Check our amazing catalog!</h1>

      <div className="product-list">
        { products.map((prods) => (
        <Product key={prods._id} data={prods}></Product>
        )) }
      </div>
    </div>
  );
};

export default Catalog;