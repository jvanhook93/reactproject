import "./product.css";
import "./quantityPicker"
import { useState, useContext } from "react";
import QuantityPicker from "./quantityPicker";
import StoreContext from '../store/storeContext';

const Product = (props) => {
  const [quantity, setQuantity] = useState(1);
  const addToCart = useContext(StoreContext).addToCart;
  const add2Cart = () => {
    console.log (props.data.title);
  };

  const handleAddClick = () => {

    let prodForCart = {...props.data, quantity: quantity};
    addToCart(prodForCart);

  }

  const onQuantityChange = (quantity) => {
    setQuantity(quantity);
  };

  const getTotal = () => {
    let total = quantity * props.data.price;
    return total.toFixed(2);
  };

  /**
   * create a quantity state var
   * onQuantityChange saves the quantity on the state variable
   * the totaluses the quantity (from state) *price
   */

  return (
    <div className="product">
      <img src={'images/' + props.data.image} alt="Product" />

      <h5>{props.data.title}</h5>

      <div className="prices">
        <label className="total">Total: ${getTotal()}</label>
        <label className="price">Price: ${props.data.price.toFixed(2)}</label>
      </div>

      <div>
        <QuantityPicker onChange={onQuantityChange}/>
        <button onClick={add2Cart} className="btn btn-sm btn-success">
          Add
          </button>
      </div>
    </div>
  );
};

export default Product;