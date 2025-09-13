import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import ".././App.css";
function HomePage() {
    const [products , setProducts] = useState([]);
    const getProductData = async ()=>{
        const response = await axios.get('http://localhost:3000/api/products/');
        console.log(response.data)
        setProducts(response.data)
    }
    useEffect(()=>{
        getProductData()
    },[])
  return (
    <>
    <Header/>
    <div className="products-grid">
        {products.map((product)=>{
            return(
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
                <p>{`$${(product.priceCents/100).toFixed(2)}`}</p>
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
                Added
                {/* <img src="" alt="" /> */}
            </div>
            <div className="add-to-cart-buttons">
                <button className="add-to-cart-btn">add to cart</button>
            </div>
        </div>
            )
        })}        
    </div>
    </>
  );
}

export default HomePage;
