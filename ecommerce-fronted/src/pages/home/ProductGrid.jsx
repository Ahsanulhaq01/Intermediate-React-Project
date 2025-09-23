import { useContext} from 'react';
import { HomeContext } from './homeContext/HomeContext';
import Product from './Product';
import { CartContext } from '../checkout/cartContext/loadcart';

function ProductGrid() {
    const products = useContext(HomeContext)
    const {loadCart} = useContext(CartContext)
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