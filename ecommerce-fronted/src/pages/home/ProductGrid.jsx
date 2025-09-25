import { useContext, useEffect} from 'react';
import { HomeContext } from './homeContext/HomeContext';
import Product from './Product';
import { CartContext } from '../checkout/cartContext/loadcart';
import { useDispatch, useSelector } from 'react-redux';
import { getProductData } from '../../redux/slices/productSlice';

function ProductGrid() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getProductData())
  },[])
  const {products} = useSelector(state => state.products)
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