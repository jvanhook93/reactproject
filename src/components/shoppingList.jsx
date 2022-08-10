import './shoppingList.css';
import { useState } from 'react';

const ShoppingList = () => {
  const [text, setText] = useState("");
  const [items, setItem] = useState([]);
  /**
   * 
   * create a state variable: items []
   * when save, you append text to the items array
   * on return, map items to li
   */

  

  const save = () => {
    console.log(text);
    items.push(text);
  };

  const textChange = (e) => {
    let value = e.target.value;
    setText(value);
  };
  
  return (
    <div className="shop-list">
      
      <h1>your shopping list</h1>

      <div className="form">
        <label>Add to list:</label>
        <input onChange={textChange} type="text" />
        <button onClick={save} className="btn btn-sm btn-primary">
          Add
          </button>
      </div>

      <ul>
        {items.map((item) => (
          <li>{item}</li>
        ))};
      </ul>
    </div>
  );
};

export default ShoppingList;