import axios from "axios";
import { formatMoney } from "../../utils/formatMoney";

function CheckoutGrid({ cartItem, loadCart }) {
  async function deleteCartItem(productId) {
    await axios.delete(`/api/cart-items/${productId}`);
    await loadCart();
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
              <div className="product-quantity">
                Quantity : {cartItem.quantity}
              </div>

              <div className="quantity-btns">
                <button>Update</button>
                <button
                  onClick={() => {
                    deleteCartItem(cartItem.productId);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
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
            <input type="radio" value={1} checked name="option" />
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
    </div>
  );
}

export default CheckoutGrid;
