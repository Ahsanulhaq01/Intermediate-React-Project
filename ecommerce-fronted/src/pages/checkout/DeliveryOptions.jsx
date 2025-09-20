import axios from "axios"
import { useEffect, useState } from "react";

function DeliveryOptions() {
    const [deliveryOption , setDeliveryOption] = useState([])
    async function getDeliveryData() {
        const response = await axios.get(`/api/delivery-options?expand=estimatedDeliveryTime`);
        setDeliveryOption(response.data);
        console.log(response.data)
    }

    useEffect(()=>{
        getDeliveryData();

    },[])
  return (
    <div className="select-delivery-option-container">
        <div className="option-heading">
          <p>Choose a delivery option:</p>
        </div>
        <label>
          <div className="free-shipping-container">
            <input type="radio" value={1} name="option" />
            <div className="date-delivery-method">
              <p className="date-para">Monday, September 22</p>
              <p className="shipping-method-para">Free Shipping</p>
            </div>
          </div>
        </label>
        <label>
          <div className="free-shipping-container">
            <input type="radio" value={1}  name="option" />
            <div className="date-delivery-method">
              <p className="date-para">Thursday, September 18</p>
              <p className="shipping-method-para">$4.99-Shipping</p>
            </div>
          </div>
        </label>
        <label>
          <div className="free-shipping-container">
            <input type="radio" value={1} name="option" />
            <div className="date-delivery-method">
              <p className="date-para">Tuesday, September 16</p>
              <p className="shipping-method-para">$9.99-Shipping</p>
            </div>
          </div>
        </label>
      </div>
  )
}

export default DeliveryOptions