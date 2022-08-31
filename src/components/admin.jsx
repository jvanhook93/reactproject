import "./admin.css";
import React from 'react';
import { useState } from 'react';
import DataService from '../services/dataService.js';

const Admin = () => {
    const [product, setProduct] = useState({})
    const [coupon, setCoupon] = useState({})
    const [showProdSuccess, setShowProdSuccess] = useState(false);


  const saveProduct = async () => {
    console.log('Saving Product');
    console.log(product);

    let fixedProd = {...product};
    fixedProd.price = +fixedProd.price;

    let service = new DataService();
    let savedProd = await ServiceWorker.saveProduct(product);
    
    if (savedProd && savedProd._id) {
      setShowProdSuccess(true);

      setTimeout (() => {setShowProdSuccess(false)}, 1000 );
    }
  };

  const textChange = (e) => {
      let value = e.target.value;
      let name = e.target.name;

      let copy = {...product};
      copy[name] = value;
      setProduct(copy);
      };
  
  const saveCoupon = () => {
    console.log('Saving Coupon Code');
    console.log(coupon);
  }

    
  const couponChange = (e) => {
      let value = e.target.value;
      let name = e.target.name;
      
      let copy = {...coupon};
      copy[name] = value;
      setCoupon(copy);
      };

    

  return (
  
  <div className="admin">
    <h1>Store administration</h1>

    {showProdSuccess ? <div className="alert alert-success">Product Saved</div> : null}

    <div className="parent">
      <section className="products">
        <h3>Register Products</h3>

        <div className="my-form">
          <label>Title:</label>
          <input name ="title" onChange ={textChange} type="text" />
        </div>

        <div className="my-form">
          <label>Price:</label>
          <input name ="price" onChange ={textChange} type="text" />
        </div>
        
        <div className="my-form">
          <label>Image:</label>
          <input name ="image" onChange ={textChange} type="text" />
        </div>

        <div className="my-form">
          <label>Category</label>
          <input name ="category" onChange ={textChange} type="text" />
        </div>

        <div className="my-form">
          <button className="btn btn-sm btn-primary" onClick={saveProduct}>
          Save Product
          </button>
        </div>

      </section>

      <section className="list">
        <h3>Discount Codes</h3>
        
        <div className="my-form">
          <label>Discount</label>
          <input name ="discount" onChange ={couponChange} type="text" />
        </div>

        <div className="my-form">
          <label>Coupon Code</label>
          <input name ="coupon" onChange ={textChange} type="text" />
        </div>

        <button className="btn btn-sm btn-primary" onClick= {saveCoupon}>
          Save
        </button>

      </section>
    </div>
  </div>
  );
};

export default Admin;