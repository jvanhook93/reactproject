import "./product.css";
import "./quantityPicker"
import { useState } from "react";
import QuantityPicker from "./quantityPicker";

const Product = () => {
  const [product, setProduct] = useState('');
  
  return (
    <div className="product-name">
      <img src="neworanges.jpg" alt="Product" />

      <h1 className="product-title">Product Name</h1>
      
      <QuantityPicker></QuantityPicker>
    </div>
  );
};

export default Product;