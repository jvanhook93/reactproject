import "./catalog.css";
import Product from "./product";
import { useEffect, useState } from 'react';
import DataService from '../services/dataService';

const Catalog = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [uniques, setUnique] = useState([]);

  const loadData = () => {
    let service = new DataService(); //instance of the class
    let prods = service.getCatalog();
    setProducts(prods);

    let uniques = []; 
    for(let i=0; i< prods.length; i++){
      let prod = prods[i];
      // if the category does NOT exist in the uniques array, add it
      if(uniques.includes(prod.category))
        uniques.push(prod.category);
    }
    setCategories (uniques);
  };

  useEffect(() => {
    loadData();
  }, []);


  return (
    <div className="catalog">
      <h1>Check our amazing catalog!</h1>

      <div>
        {categories.map((cat) => (
          <button key={cat} className='cat-btn'>
            {cat}
            </button>
        ))}
      </div>

      <ul>
        {uniques.map((unique) => (
          <li>{unique}</li>
        ))}
      </ul>
      <div className="product-list">
        { products.map((prods) => (
        <Product key={prods._id} data={prods}></Product>
        )) }
      </div>
    </div>
  );
};

export default Catalog;