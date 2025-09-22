import { useContext} from 'react';
import { HomeContext } from './homeContext/HomeContext';
import Product from './Product';

function ProductGrid({loadCart}) {
    const products = useContext(HomeContext)
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