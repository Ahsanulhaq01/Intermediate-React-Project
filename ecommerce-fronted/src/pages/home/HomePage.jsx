import Header from "../../components/Header";
import ProductGrid from "./ProductGrid";
import './homepage.css'
import "../.././App.css";
function HomePage({loadCart}) {
    

    
  return (
    <>
    <Header/>
    <ProductGrid loadCart={loadCart} />
    </>
  );
}

export default HomePage;
