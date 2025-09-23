import HomePage from "./pages/home/HomePage";
import { Route,Routes } from "react-router";
import Orders from "./pages/orders/Orders";
import Checkout from './pages/checkout/Checkout'
import Tracking from "./pages/tracking/Tracking";
import { ContextHome } from "./pages/home/homeContext/ContextHome";
import { CartContext } from "./pages/checkout/cartContext/loadcart";
import { useContext } from "react";
import ProviderComponent from "./pages/checkout/cartContext/CartContextProvider";

function App(){
  const {cart , loadCart} = useContext(CartContext);
  //   const [cart , setCart] = useState([])
  // const loadCart = async()=>{
  //   const response = await axios.get('/api/cart-items?expand=product');
  //   setCart(response.data)
  // }
    return(
      <ContextHome>
        <Routes>
            <Route index element={<HomePage loadCart={loadCart} cart={cart}/>}></Route>
            <Route path="orders" element={<Orders/>}></Route>
            <Route path="checkout" element={<Checkout/>}></Route>
            <Route path="tracking" element={<Tracking/>}></Route>
        </Routes>
        </ContextHome>
    )
}

export default App;
