import Header from "../components/Header";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import "./orders.css";
import axios from "axios";

function Orders() {
  const [orders, setOrders] = useState([]);

  async function getOrdersData() {
    const response = await axios.get("api/orders?expand=products");
    setOrders(response.data);
  }
  useEffect(() => {
    getOrdersData();
  }, []);
  return (
    <>
      <Header />
      <div className="order-container">
        <div className="order-header">
          <p>Your Orders</p>
        </div>
        {orders.map((order) => {
          return (
            <div className="order-summary" key={order.id}>
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
                  <p className="order-id-value">{order.id}</p>
                </div>
                {/* <hr style={{ border: "1px solid gray", margin: "20px 0" }}/> */}
                {order.products.map((prod) => {
                  return (
                    <div className="product-details" key={prod.productId}>
                      <div className="image">
                        <img src={prod.product.image} alt="image" />
                      </div>
                      <div className="text-and-button">
                        <div className="product-text">
                          <p className="product-name">{prod.product.name}</p>
                          <div className="order-delivery-data">
                            <p className="delivery-text">Arriving on:</p>
                            <p className="order-delivery-date"> September 20</p>
                          </div>
                          <div className="add-to-cart">
                            <i className="fa-solid fa-cart-shopping"></i>
                            <button>add to cart</button>
                          </div>
                        </div>
                        <div className="track-button">
                          <button className="track-package">
                            <Link to="/tracking">Track Package</Link>
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              {/* {order.products.map((prod)=>{
          {console.log(prod)}
          return(
            <div className="product-details" key={prod.productId}>
          <div className="image">
          <img src={prod.product.image} alt="image" />
        </div>
        <div className="text-and-button">
          <div className="product-text">
            <p className="product-name">{prod.product.name}</p>
            <div className="order-delivery-data">
                <p className="delivery-text">
                  Arriving on:
                </p>
                <p className="order-delivery-date"> September 20</p>
                
            </div>
            <div className="add-to-cart">
              <i className="fa-solid fa-cart-shopping"></i>
              <button>add to cart</button></div>
          </div>
            <div className="track-button">
              <button className="track-package">
                <Link to ="/tracking">Track Package</Link>
              </button>
            </div>
        </div>

        </div>
          )
        })} */}
              {/* <div className="product-details">
          <div className="image">
          <img src="images/products/athletic-cotton-socks-6-pairs.jpg" alt="image" />
        </div>
        <div className="text-and-button">
          <div className="product-text">
            <p className="product-name">Black and Gray Athletic Cotton Socks - 6 Pairs</p>
            <div className="order-delivery-data">
                <p className="delivery-text">
                  Arriving on:
                </p>
                <p className="order-delivery-date"> September 20</p>
                
            </div>
            <div className="add-to-cart">
              <i className="fa-solid fa-cart-shopping"></i>
              <button>add to cart</button></div>
          </div>
            <div className="track-button">
              <button className="track-package">
                <Link to ="/tracking">Track Package</Link>
              </button>
            </div>
        </div>

        </div> */}
            </div>
          );
        })}
        {/* <div className="order-summary">
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
        <div className="product-details">
          <div className="image">
          <img src="images/products/athletic-cotton-socks-6-pairs.jpg" alt="image" />
        </div>
        <div className="text-and-button">
          <div className="product-text">
            <p className="product-name">Black and Gray Athletic Cotton Socks - 6 Pairs</p>
            <div className="order-delivery-data">
                <p className="delivery-text">
                  Arriving on:
                </p>
                <p className="order-delivery-date"> September 20</p>
                
            </div>
            <div className="add-to-cart">
              <i className="fa-solid fa-cart-shopping"></i>
              <button>add to cart</button></div>
          </div>
            <div className="track-button">
              <button className="track-package">
                <Link to ="/tracking">Track Package</Link>
              </button>
            </div>
        </div>

        </div>
        

        </div>  */}
      </div>
    </>
  );
}

export default Orders;
