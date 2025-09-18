import React from "react";
import "./header.css";
import { Link } from "react-router";
import Orders from "../pages/orders/Orders";
function Header() {
  return (
    <>
      <div className="header">
        <div className="header-name">
            <Link to="/">Ecommerce Store</Link>
        </div>
        <div className="search-bar">
          <div className="search-bar-input">
            <input type="text" placeholder="search" />
          </div>

          <div className="search-bar-arrow-icon">
            <i className="fa-solid fa-arrow-right"></i>
          </div>
        
        </div>
        <div className="header-menu">
            <div className="orders">
                <Link to ="/orders">Orders</Link>
            </div>
            <div className="cart-icon">
              <Link to='/checkout'>
              <i className="fa-solid fa-cart-shopping"></i>
                <div className="cart-quantity">
                    <p>3</p>
                </div>
              </Link>
                
            </div>
        </div>
      </div>
    </>
  );
}

export default Header;
