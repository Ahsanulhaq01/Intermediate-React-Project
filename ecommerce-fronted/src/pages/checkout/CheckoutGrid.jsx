import { useState } from "react";
import axios from "axios";
import { formatMoney } from "../../utils/formatMoney";
import DeliveryOptions from "./DeliveryOptions";

function CheckoutGrid({ cartItem, loadCart }) {
  const [isEdited, setIsEdited] = useState(false);
  const [quantity, setQuantity] = useState(cartItem.quantity);

  async function deleteCartItem() {
    await axios.delete(`/api/cart-items/${cartItem.productId}`);
    await loadCart();
  }

  async function updateCartItem() {
    await axios.put(`/api/cart-items/${cartItem.productId}`, {
      quantity,
    });
    await loadCart();
  }
  function updateOnChange(e) {
    setQuantity(Number(e.target.value));
  }
  function toggleUpdate() {
    setIsEdited(true);
  }
  function handleKeyDown(e){
    if(e.key === 'Enter'){
      setIsEdited(false);
      updateCartItem();
    }
    else if(e.key === 'Escape'){
      setIsEdited(false);
      setQuantity(cartItem.quantity)
    }
  }
  return (
    <div className="delivery-container">
      <div className="delivery-option-and-product-details">
        <div className="delivery-data">
          <p className="delivery-header">Delivery date:Monday, September 22</p>
        </div>
        <div className="product-details-container">
          <img src={cartItem.product.image} alt="image" />
          <div className="products-details">
            <p className="name-of-products">{cartItem.product.name}</p>
            <p className="product-price">
              {formatMoney(cartItem.product.priceCents)}
            </p>
            <div className="quantity-modification-container">
              {isEdited ? (
                <input type="number" value={quantity} onChange={updateOnChange} onKeyDown={handleKeyDown} style={{width : 100}} />
              ) : (
                <div className="product-quantity">
                  Quantity : {cartItem.quantity}
                </div>
              )}

              <div className="quantity-btns">
                <button onClick={toggleUpdate}>Update</button>
                <button
                  onClick={() => {
                    deleteCartItem();
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DeliveryOptions loadCart={loadCart} cartItem={cartItem}/>
    </div>
  );
}

export default CheckoutGrid;
