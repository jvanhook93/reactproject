import "./product.css";
import "./quantityPicker"
import { useState } from "react";
import QuantityPicker from "./quantityPicker";

const Product = (props) => {

  return (
    <div className="product">
      <img src={'images/' + props.data.image} alt="Product" />

      <h5>{props.data.title}</h5>

      <label>Total: {props.data.price.toFixed(2)}</label>
      <label>Price: {props.data.price.toFixed(2)}</label>
      
      <QuantityPicker />
    </div>
  );
};

export default Product;