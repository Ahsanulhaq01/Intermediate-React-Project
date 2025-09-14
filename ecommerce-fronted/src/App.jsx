import HomePage from "./pages/HomePage";
import { Route,Routes } from "react-router";
import Orders from "./pages/Orders";

function App(){
    return(
        <Routes>
            <Route index element={<HomePage/>}></Route>
            <Route path="orders" element={<Orders/>}></Route>
        </Routes>
    )
}

export default App;
