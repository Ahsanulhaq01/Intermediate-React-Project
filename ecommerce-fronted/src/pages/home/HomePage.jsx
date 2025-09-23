import Header from "../../components/Header";
import ProductGrid from "./ProductGrid";
import "./homepage.css";
import "../.././App.css";
import { useContext } from "react";
import { CartContext } from "../checkout/cartContext/loadcart";
function HomePage() {
  const {loadCart , cart} = useContext(CartContext);
  return (
    <>
      <Header cart={cart} loadCart={loadCart} />
      <ProductGrid />
    </>
  );
}

export default HomePage;
