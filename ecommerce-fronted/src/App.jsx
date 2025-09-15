import HomePage from "./pages/HomePage";
import { Route,Routes } from "react-router";
import Orders from "./pages/Orders";
import Checkout from "./pages/Checkout";

function App(){
    return(
        <Routes>
            <Route index element={<HomePage/>}></Route>
            <Route path="orders" element={<Orders/>}></Route>
            <Route path="checkout" element={<Checkout/>}></Route>
        </Routes>
    )
}

export default App;
