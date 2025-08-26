import { Link } from "react-router";
import "./navbar.css";
function Navbar() {
  return (
    <>
      <div className="nav-container">
        <div className="logo">
          <img src="./menu-logo.png" alt="menu-logo" className="menu-img" />
        </div>
        <div className="nav-right-section">
          <ul className="nav-ul">
            <li key={1}>
              <Link to="/">Home</Link>
            </li>
            <li key={2}>
              <Link to="/post">all Post</Link>
            </li>
            <li key={3}>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
