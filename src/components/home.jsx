import "./home.css"

import {Link} from "react-router-dom";

const Home = () => {
  
  return (
    <div className="home">
      <h1>React Project</h1>
    <h1>Welcome to my Store!</h1>

    <Link className="btn btn-lg btn-dark" to="/catalog">
      Check out our fresh and Amazing Catalog
      </Link>
    </div>
    
  );
};

export default Home;

/**
 * 
 * create a cart component
 * register on app.js a route for /cart to display your cart component
 * 
 * modify navbar to add link to /cart
 * 
 * 
 */