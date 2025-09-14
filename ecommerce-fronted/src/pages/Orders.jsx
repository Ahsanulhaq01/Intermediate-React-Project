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
<<<<<<< HEAD
        <div className="image">
          <img src="" alt="" />
        </div>
=======
>>>>>>> cfd63c730c5d8080c2be7c03f4759abd03568ef3

        </div>


      </div>
    </>
  );
}

export default Orders;
