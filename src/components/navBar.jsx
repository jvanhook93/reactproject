import './navBar.css';

import { Link } from "react-router-dom";

const NavBar = () => {
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
      View Cart
    </Link>
  </form>
      </div>
  );
};

export default NavBar;
