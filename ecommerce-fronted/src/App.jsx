import HomePage from "./pages/home/HomePage";
import { Route,Routes } from "react-router";
import Orders from "./pages/orders/Orders";
import Checkout from './pages/checkout/Checkout'
import Tracking from "./pages/tracking/Tracking";
import { ContextHome } from "./pages/home/homeContext/ContextHome";

function App(){

    return(
      <ContextHome>
        <Routes>
            <Route index element={<HomePage/>}></Route>
            <Route path="orders" element={<Orders/>}></Route>
            <Route path="checkout" element={<Checkout/>}></Route>
            <Route path="tracking" element={<Tracking/>}></Route>
        </Routes>
        </ContextHome>
    )
}

export default App;
