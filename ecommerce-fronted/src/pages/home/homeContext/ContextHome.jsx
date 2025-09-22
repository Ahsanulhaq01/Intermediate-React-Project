import axios from "axios";
import { useEffect, useState } from "react";
import { HomeContext } from "./HomeContext";

export function ContextHome({children}) {
    const [products ,setProducts] = useState([]);
    async function getProductData() {
        const response = await axios.get('api/products/');
        setProducts(response.data)
    }
    useEffect(()=>{
        getProductData();
    },[])
  return (
    <HomeContext.Provider value={products} >
        {children}
    </HomeContext.Provider>
  )
}