import { useState ,useEffect } from 'react';
import axios from 'axios'
import Product from './Product';

function ProductGrid({loadCart}) {
    const [products , setProducts] = useState([]);
    const getProductData = async ()=>{
        const response = await axios.get('api/products/');
        setProducts(response.data)
    }
    useEffect(()=>{
        getProductData()
    },[])
    
  return (
    <div className="products-grid">
        {products.map((product)=>{
            return(
            <Product product={product} key={product.id} loadCart={loadCart}/>
            )
        })}        
    </div>
  )
}

export default ProductGrid