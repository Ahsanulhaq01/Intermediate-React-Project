import HomePage from "./pages/home/HomePage";
import { Route,Routes } from "react-router";
import Orders from "./pages/orders/Orders";
import Checkout from './pages/checkout/Checkout'
import Tracking from "./pages/tracking/Tracking";
import { useState } from "react";
import { ContextHome } from "./pages/home/homeContext/ContextHome";
import axios from "axios";

function App(){
    const [cart , setCart] = useState([])
  const loadCart = async()=>{
    const response = await axios.get('/api/cart-items?expand=product');
    setCart(response.data)
  }
    return(
      <ContextHome>
        <Routes>
            <Route index element={<HomePage loadCart={loadCart} cart={cart}/>}></Route>
            <Route path="orders" element={<Orders/>}></Route>
            <Route path="checkout" element={<Checkout cart={cart} loadCart={loadCart} />}></Route>
            <Route path="tracking" element={<Tracking/>}></Route>
        </Routes>
        </ContextHome>
    )
}

export default App;
