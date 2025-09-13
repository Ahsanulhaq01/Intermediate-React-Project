import React from "react";
import "./header.css";
function Header() {
  return (
    <>
      <div className="header">
        <div className="header-name">
            <p>Ecommerce Store</p>
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
                <p>Orders</p>
            </div>
            <div className="cart-icon">
                <i className="fa-solid fa-cart-shopping"></i>
                <div className="cart-quantity">
                    <p>3</p>
                </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default Header;
