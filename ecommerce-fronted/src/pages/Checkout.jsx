import React from "react";
import { Link } from "react-router";
import "./checkout.css";

function Checkout() {
  return (
    <>
      <div className="checkout-page">
        <div className="checkout-header">
          <div className="checkout-header-logo">
            <Link to="/">Ecommerce Store</Link>
          </div>
          <div className="checkout-header-quantity">
            <p className="checkout-quantity">
              Checkout(<i> 3 items </i>)
            </p>
          </div>
          <div className="checkout-lock-icon">
            <img src="src/assets/images/icons/checkout-lock-icon.png" alt="" />
          </div>
        </div>
        <div className="checkout-grid">
          <div className="checkout-review-header">
            <p className="reveiw-order">Review yours orders</p>
          </div>
          <div className="delivery-and-payment-container">
            <div className="delivery-container">
              <div className="delivery-data">
                <p className="delivery-header">
                  Delivery date:Monday, September 22
                </p>
              </div>
              <div className="delivery-option-and-product-details">
                <div className="product-details-container">
                  <img
                    src="images/products/athletic-cotton-socks-6-pairs.jpg"
                    alt="image"
                   
                  />
                  <div className="products-details">
                    <p className="name-of-products">
                      Adults Plain Cotton T-Shirt - 2 Pack
                    </p>
                    <p className="product-price">$7.99</p>
                    <div className="quantity-modification-container">
                      <div className="product-quantity">Quantity : 1</div>
                      <div className="quantity-btns">
                        <button>Update</button>
                        <button>Delete</button>
                      </div>
                    </div>
                  </div>
                <div className="select-delivery-option-container">
                    <div className="option-heading">
                        <p>Choose a delivery option:</p>
                    </div>
                    <div className="free-shipping-container">
                        <input type="radio" name="option" />
                        <div className="date-delivery-method">
                            <p className="date-para">
                                Monday, September 22
                            </p>
                            <p className="shipping-method-para">
                                Free Shipping
                            </p>
                        </div>
                    </div>
                     <div className="free-shipping-container">
                        <input type="radio" name="option" />
                        <div className="date-delivery-method">
                            <p className="date-para">
                                Thursday, September 18
                            </p>
                            <p className="shipping-method-para">
                                $4.99-Shipping
                            </p>
                        </div>
                    </div>
                     <div className="free-shipping-container">
                        <input type="radio" name="option" />
                        <div className="date-delivery-method">
                            <p className="date-para">
                               Tuesday, September 16
                            </p>
                            <p className="shipping-method-para">
                                $9.99-Shipping
                            </p>
                        </div>
                    </div>
                </div>
                </div>
              </div>
            </div>
            <div className="payment-summary-container">
              <div className="payment-summary">
                <p className="payment-summary-heading">Payment Summary</p>
                <div className="items-container">
                  <p className="item-count">item(1)</p>
                  <p className="item-price">$7.99</p>
                </div>
                <div className="shipping-and-handling-container">
                  <p className="shipping-and-handling">shipping & handling</p>
                  <p className="shipping-and-handling">$0.00</p>
                </div>
                <div className="tax-container">
                  <p className="tax-text">Total before tax:</p>
                  <p className="tax-cost">$7.99</p>
                </div>
                <div className="estimated-tax-container">
                  <p className="estimated-text">Estimated tax (10%):</p>
                  <p className="estimated-cost">$0.80</p>
                </div>
              </div>
              <div className="total-cost-container">
                <div className="orders-cost">
                  <p className="total-order-cost-heading">Order total:</p>
                  <p className="order-cost">$8.79</p>
                </div>
                <div className="place-order-button">
                  <button className="place-order">Place your order</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
