import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './vistas/home';
import Us from './vistas/us';
import Contacto from './vistas/contact';
import Header from './components/header';
import ProductoDetalle from './vistas/productoDetalle';
import Footer from './components/footer';
import Admin from './vistas/admin';
import FormularioAdd from './components/agregarProductos';
import { ProductoProvider } from './context/productosContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css'
function App() {
  return (
      <div className='div'>
        <ProductoProvider>
        <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/nosotros" element={<Us />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/productos/:id" element={<ProductoDetalle />} />
          <Route  path="/admin" element={<Admin />} />
          <Route path='/add' element={<FormularioAdd />}></Route>
        </Routes>
        <Footer/>
        </BrowserRouter>
        </ProductoProvider>
      </div> 
    );}
export default App;
