import Header from "../components/Header";
import "./tracking.css";

function Tracking() {
  return (
    <>
        <Header/>
      <div className="tracking-page">
        <div className="order-tracking">
            <a href="/" className="back-to-orders-link link-primary">views all orders</a>
            <div className="delivery-date">
                <p>Tuesday, September 23</p>
            </div>
             <div className="product-info">Black and Gray Athletic Cotton Socks - 6 Pairs</div>

          <div className="product-info">Quantity:1</div>
            <img src="images/products/athletic-cotton-socks-6-pairs.jpg" alt="product-image" className="product-image" />
            <div className="progress-label-container">
                <div className="progress-label current-status">Pending</div>
                <div className="progress-label">Shipped</div>
                <div className="progress-label">Delivered</div>
            </div>
            <div className="progress-bar-container">
                <div className="progress-bar" style={{width : '10%'}}></div>
            </div>
        </div>
      </div>
    </>
  );
}

export default Tracking;
