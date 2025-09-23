import axios from "axios";
import dayjs from "dayjs";
import { formatMoney } from "../../utils/formatMoney";
import { useContext } from "react";
import { CartContext } from "./cartContext/loadcart";

function DeliveryOptions({ cartItem  , deliveryOptions}) {
  const {loadCart} = useContext(CartContext)
  return (
    <div className="select-delivery-option-container">
      <div className="option-heading">
        <p>Choose a delivery option:</p>
      </div>
      {deliveryOptions.map((deliveryOption) => {
        let priceString = deliveryOption.priceCents > 0 ? `${formatMoney(deliveryOption.priceCents)}-shipping` : 'Free Shipping';
          async function updateDeliveryOption() {
            await axios.put(`/api/cart-items/${cartItem.productId}`, {
              deliveryOptionId: deliveryOption.id,
            });
            await loadCart();
          }
          return (
            <div
              className="free-shipping-container"
              key={deliveryOption.id}
              onClick={updateDeliveryOption}
            >
              <input
                type="radio"
                name={`delivery-option-${cartItem.productId}`}
                checked={deliveryOption.id === cartItem.deliveryOptionId}
                onChange={() => {}}
              />
              <div className="date-delivery-method">
                <p className="date-para">
                  {dayjs(deliveryOption.estimatedDeliveryTimeMs).format(
                    "dddd MMMM D"
                  )}
                </p>
                <p className="shipping-method-para">{priceString}</p>
              </div>
            </div>
          );
        
      })}
    </div>
  );
}

export default DeliveryOptions;
