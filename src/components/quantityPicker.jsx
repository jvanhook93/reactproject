import "./quantityPicker.css"
import { useState } from "react";

const QuantityPicker = () => {
  const [quantity, setQuantity] = useState(1);

  const Increase = () => {
    let next = quantity + 1;
    setQuantity(next);
  };

  const Decrease = () => {
    let next = quantity - 1;
    if(next >= 1) {
      setQuantity(next);
    }
  };

  return( 
  <div className="qt-picker">
    <button onClick={Increase} className="addition">+</button>
    <label className="quantity-number">{quantity}</label>
    <button onClick={Decrease} className="subtract">-</button>
  </div>
  );
};

export default QuantityPicker;