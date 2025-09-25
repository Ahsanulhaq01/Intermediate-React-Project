import { Link} from "react-router";
import "./checkout.css";
import CheckoutGrid from "./CheckoutGrid";
import {useEffect } from "react";
import PaymentSummary from "./PaymentSummary";
import { useDispatch, useSelector } from "react-redux";
import { loadCart } from "../../redux/slices/cartSlice";


function Checkout() {
  const dispatch =useDispatch();
  useEffect(()=>{
    dispatch(loadCart())
  } , [])

  const {cart} = useSelector(state =>state.cart)
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
             
             <PaymentSummary/>
           
            {cart.map((cartItem)=>{

              return(
              <CheckoutGrid cartItem={cartItem} key={cartItem.id} />
              )
            })}
                      
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
