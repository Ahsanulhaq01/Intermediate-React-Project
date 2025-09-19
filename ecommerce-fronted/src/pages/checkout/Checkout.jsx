import { Link} from "react-router";
import "./checkout.css";
import CheckoutGrid from "./CheckoutGrid";
import { useEffect } from "react";


function Checkout({cart ,loadCart}) {

    useEffect(()=>{
       loadCart();
    } ,[])
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
           
            {cart.map((cartItem)=>{

              return(
              <CheckoutGrid cartItem={cartItem} loadCart={loadCart} key={cartItem.id} />
              )
            })}
                      
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
