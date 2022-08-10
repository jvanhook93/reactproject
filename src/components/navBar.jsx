import './navBar.css';

const NavBar = () => {
  return (
    <div>
      <ul className="nav nav-pills nav-justified">
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="#">Home</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">About</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Social Medias</a>
  </li>
  <li className="nav-item">
    <a className="nav-link disabled">Disabled</a>
  </li>
</ul>
    </div>
  );
};

export default NavBar;
