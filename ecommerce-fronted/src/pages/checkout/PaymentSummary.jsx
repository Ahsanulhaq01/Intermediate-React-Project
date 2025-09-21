import axios from "axios";
import { useState , useEffect } from "react";
import {formatMoney} from '../../utils/formatMoney'
function PaymentSummary({cart}) {
  const [paymentSummary , setPaymentSummary] = useState({});

  async function getPaymentData(){
    const response = await axios.get('/api/payment-summary');
    setPaymentSummary(response.data);
  }
  useEffect(()=>{
    getPaymentData();
  } , [cart])
  return (
     <div className="payment-summary-container">
              <div className="payment-summary">
                <p className="payment-summary-heading">Payment Summary</p>
                <div className="items-container">
                  <p className="item-count">item({paymentSummary.totalItems})</p>
                  <p className="item-price">{formatMoney(paymentSummary.productCostCents)}</p>
                </div>
                <div className="shipping-and-handling-container">
                  <p className="shipping-and-handling">shipping & handling</p>
                  <p className="shipping-and-handling">{formatMoney(paymentSummary.shippingCostCents)}</p>
                </div>
                <div className="tax-container">
                  <p className="tax-text">Total before tax:</p>
                  <p className="tax-cost">{formatMoney(paymentSummary.totalCostBeforeTaxCents)}</p>
                </div>
                <div className="estimated-tax-container">
                  <p className="estimated-text">Estimated tax (10%):</p>
                  <p className="estimated-cost">{formatMoney(paymentSummary.taxCents)}</p>
                </div>
              </div>
              <div className="total-cost-container">
                <div className="orders-cost">
                  <p className="total-order-cost-heading">Order total:</p>
                  <p className="order-cost">{formatMoney(paymentSummary.totalCostCents)}</p>
                </div>
                <div className="place-order-button">
                  <button className="place-order">Place your order</button>
                </div>
              </div>
            </div>
  )
}

export default PaymentSummary