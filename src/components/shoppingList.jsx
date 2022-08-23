import './shoppingList.css';
import { useState } from 'react';

const ShoppingList = () => {
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);
  /**
   * 
   * create a state variable: items []
   * when save, you append text to the items array
   * on return, map items to li
   */

  

  const save = () => {
   
    let clone = [...items];
    clone.push(text);
    setItems(clone);
      

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
          <li key={item}>{item}</li>
        ))};
      </ul>
    </div>
  );
};

export default ShoppingList;