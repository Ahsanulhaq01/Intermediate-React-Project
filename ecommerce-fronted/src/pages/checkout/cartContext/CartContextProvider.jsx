import axios from "axios"
import { CartContext } from "./loadcart"
import { useCallback, useEffect, useState } from "react";

function CartContextProvider({children}) {
    const [cart ,setCart] = useState([]);
    // async function  loadCart() {
    //     const response = await axios.get(`/api/cart-items?expand=product`);
    //     setCart(response.data);
    // }
    const loadCart = useCallback(async ()=>{
      const response = await axios.get(`/api/cart-items?expand=product`);
        setCart(response.data);
    } , [])
    useEffect(()=>{
        loadCart();
    },[])
  return (
    <CartContext.Provider value={{cart , loadCart}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider;