import './navBar.css';
import Product from './product';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { useContext } from 'react';
import StoreContext from '../store/storeContext.js';

const NavBar = () => {
  const cart = useContext(StoreContext).cart;

  const GetNumItems = () => {
    let sum = 0;

    for (let i=0; i < cart.length, i++;) {
      let prod = cart[i];
      sum += prod.quantity;
    }

    return sum;
  };
  return (
      <div>
        <ul className="nav nav-pills nav-justified">
    <li className="nav-item">
      <Link className="nav-link active" aria-current="page" to="/">
        Home
        </Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/list">
        My List
        </Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/catalog">
        Catalog
      </Link>
    </li>

    <li className="nav-item">
      <Link className="nav-link" to="/admin">
        Admin
      </Link>
    </li>

  </ul>
  <form className='d-flex' role="search">
    <Link className="btn btn-outline-info" to="/cart">
      {cart.length} &nbsp; View Cart
    </Link>
  </form>
      </div>
  );
};

export default NavBar;
