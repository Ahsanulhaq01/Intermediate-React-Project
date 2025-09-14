import React from "react";
import Header from "../components/Header";
import "./orders.css";

function Orders() {
  return (
    <>
      <Header />
      <div className="order-container">
       
        <div className="order-header">
          <p>Your Orders</p>
        </div>
         <div className="order-summary">
        <div className="order-placed-container">
          <div className="order-place-text">
            <div className="order-date">
              <p className="order-place-date bold">Order Placed:</p>
              <p>September 13</p>
            </div>
            <div className="order-place-price">
                <p className="total-cost bold">Total Cost:</p>
                <p className="cost-value">$130.28</p>
            </div>
            </div>
            <div className="order-id-container">
              <p className="id bold">Order Id:</p>
              <p className="order-id-value">
                2278d9ac-4a6d-4cd2-8619-42f776f933fb
              </p>
            </div>
          
        </div>
        <div className="product-details">
          <div className="image">
          <img src="images/products/athletic-cotton-socks-6-pairs.jpg" alt="image" />
        </div>
        <div className="text-and-button">
          <div className="product-text">
            <p className="product-name">Black and Gray Athletic Cotton Socks - 6 Pairs</p>
            <div className="delivery-data">
                <p className="delivery-text">
                  Arriving on:
                </p>
                <p className="delivery-date"> September 20</p>
            </div>
            <div className="add-to-cart">
              <i className="fa-solid fa-cart-shopping"></i>
              <button>add to cart</button></div>
          </div>
            <div className="track-button">
              <button className="track-package">
                Track Package
              </button>
            </div>
        </div>

        </div>
        

        </div> 


      </div>
    </>
  );
}

export default Orders;
