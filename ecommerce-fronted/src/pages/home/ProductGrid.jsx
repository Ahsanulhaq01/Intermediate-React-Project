import Product from './Product';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductData } from '../../redux/slices/productSlice';

function ProductGrid() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getProductData())
  },[])
  const {products} = useSelector(state => state.products)
  return (
    <div className="products-grid">
        {products.map((product)=>{
            return(
            <Product product={product} key={product.id}/>
            )
        })}        
    </div>
  )
}

export default ProductGrid