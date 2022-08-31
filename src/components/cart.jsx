import "./cart.css";
import { useContext} from 'react';
import StoreContext from '../store/storeContext';
import index from '//index.js';
import addToCart from '../store/storeContext.js';

const Cart = () => {
  const cart = useContext = useContext(StoreContext).cart;

  const GetNumItems = () => {
    let sum = 0;
    for (let i=0; i < cart.length; i++) {
      let prod = cart[i];
      sum += prod.quantity;
    }
    return sum;
  }

  const  ItemsInCart = () => {
    for (let i=0; i < cart.length; i++) {
      let index = cart [i];
    }
    return index;

  }

  return (
    <div className="cart">
      <h1>Ready to pay?</h1>
      <h5>We have {GetNumItems()} items ready for you</h5>
      <ul>
        {cart.map((prod, index) => <ItemsInCart key={prod._id} data={prod} number={index}/> )}
      </ul>
    </div>
    

  );
};

export default Cart;