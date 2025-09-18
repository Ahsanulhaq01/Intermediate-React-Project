import { formatMoney } from '../../utils/formatMoney'
import axios from 'axios'

function Product({product}) {

    async function addToCart(productId , quantity){
        await axios.post('/api/cart-items',{
            productId ,
            quantity,
        })       
       
    }
  return (
     <div className="products" key={product.id}>
            <div className="product-image">
                <img src={product.image} alt="" />
            </div>
            <div className="product-name">
                <p className="name-of-product">
                    {product.name}
                </p>
            </div>
            <div className="product-rating">
                <img src={`images/ratings/rating-${((Math.floor(Math.random()*50+1))%5)*10}.png`}alt="rating-image" />
            </div>
            <div className="product-price">
                <p>{formatMoney(product.priceCents)}</p>
            </div>
            <div className="select-quantity">
                <select name="quantity-of-product" id="quantity-selector">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>

                </select>
            </div>
            <div className="product-spacer"></div>
            <div className="added-to-cart" style={{opacity : 0}}>
                <img src="../src/assets/images/icons/checkmark.png" alt="checkmark-image" />
                <p className="added-text">Added</p>
            </div>
            <div className="add-to-cart-buttons">
                <button className="add-to-cart-btn" onClick={()=>{
                    addToCart(product.id, 1)
                }}>add to cart</button>
            </div>
        </div>
  )
}

export default Product