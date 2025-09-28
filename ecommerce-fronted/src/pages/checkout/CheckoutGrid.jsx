import { useState , useEffect} from "react";
import axios from "axios";
import { formatMoney } from "../../utils/formatMoney";
import DeliveryOptions from "./DeliveryOptions";
import { useDispatch, useSelector } from "react-redux";
import { loadCart } from "../../redux/slices/cartSlice";
import dayjs from "dayjs";


function CheckoutGrid({ cartItem}) {
  const dispatch = useDispatch();
  const {cart} = useSelector(state=>state.cart);
  const [isEdited, setIsEdited] = useState(false);
  const [quantity, setQuantity] = useState(cartItem.quantity);
  const [deliveryOptions, setDeliveryOptions] = useState([]);
  async function getDeliveryData() {
    const response = await axios.get(
      `/api/delivery-options?expand=estimatedDeliveryTime`
    );
    setDeliveryOptions(response.data);
  }

  useEffect(() => {
    getDeliveryData();
  }, []);

  async function deleteCartItem() {
    await axios.delete(`/api/cart-items/${cartItem.productId}`);
    dispatch(loadCart());
  }

  async function updateCartItem() {
    await axios.put(`/api/cart-items/${cartItem.productId}`, {
      quantity,
    });
    dispatch(loadCart());
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
        {/* {
          deliveryOptions.length > 0 && cart.map((cartItem))=>{
             const selectedDeliveryOption = deliveryOptions.find(
                  (deliveryOption) => {
                    return deliveryOption.id === cartItem.deliveryOptionId;
                  }
                );
          }
          return(
              <div className="delivery-data">
          <p className="delivery-header">Delivery date:{
            selectDeliveryOption.
            } </p>
        </div>
          )
        } */}
        {deliveryOptions.length > 0 &&
  cart.map((cartItem) => {
    const selectedDeliveryOption = deliveryOptions.find(
      (deliveryOption) => deliveryOption.id === cartItem.deliveryOptionId
    );

    return (
      <div key={cartItem.productId} className="delivery-data">
        <p className="delivery-header">
          Delivery date: {dayjs(selectedDeliveryOption.estimatedDeliveryTimeMs).format('dddd ,MMMM D')}

          {/* {dayjs( selectedDeliveryOption.estimatedDeliveryTimeMs).format("dddd, MMMM D")} */}
        </p>
      </div>
    );
  })}
        {/* <div className="delivery-data">
          <p className="delivery-header">Delivery date:{
            
            } </p>
        </div> */}
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
      <DeliveryOptions cartItem={cartItem} deliveryOptions={deliveryOptions}/>
    </div>
  );
}

export default CheckoutGrid;
