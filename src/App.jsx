import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './vistas/home';
import Us from './vistas/us';
import Contacto from './vistas/contact';
import Header from './components/header';
import ProductoDetalle from './vistas/productoDetalle';
import Footer from './components/footer';
import Admin from './vistas/admin';
import FormularioAdd from './components/agregarProductos';
import Login from './vistas/login';
import Buscar from './components/busqueda';
import { ProductoProvider } from './context/productosContext';
import { AutenticacionProvider } from "./context/autenticacionContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css'
function App() {
  return (
      <div className='div'>
          <AutenticacionProvider>
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
                  <Route path='/login' element={<Login/>}></Route>
                  <Route path="/buscar/:termino" element={<Buscar />} />

                </Routes>
              <Footer/>
              <ToastContainer />
            </BrowserRouter>
          </ProductoProvider>
          </AutenticacionProvider>
      </div> 
    );}
export default App;
