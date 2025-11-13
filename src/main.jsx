import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ProductoProvider } from './context/productosContext'
import { CarritoProvider } from './context/carritoContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductoProvider>
    <CarritoProvider>
    <App />
    </CarritoProvider>
    </ProductoProvider>
  </StrictMode>,
)
