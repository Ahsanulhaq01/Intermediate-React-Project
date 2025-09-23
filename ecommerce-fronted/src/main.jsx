import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import CartContextProvider from './pages/checkout/cartContext/CartContextProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <CartContextProvider>
      <App />
      </CartContextProvider>
    </BrowserRouter>
    
  </StrictMode>,
)
