import HomePage from "./pages/HomePage";
import { Route,Routes } from "react-router";
import Orders from "./pages/Orders";
import Checkout from "./pages/Checkout";
import Tracking from "./pages/Tracking";
import { useState} from "react";
import axios from "axios";

function App(){
    const [cart , setCart] = useState([])
  const loadCart = async()=>{
    const response = await axios.get('/api/cart-items?expand=product');
    setCart(response.data)
  }

    return(
        <Routes>
            <Route index element={<HomePage/>}></Route>
            <Route path="orders" element={<Orders/>}></Route>
            <Route path="checkout" element={<Checkout cart={cart} loadCart={loadCart} />}></Route>
            <Route path="tracking" element={<Tracking/>}></Route>
        </Routes>
    )
}

export default App;
