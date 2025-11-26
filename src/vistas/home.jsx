import {useState } from "react";
import Carrito from "../components/carrito";
import Producto from "../components/producto";
import BarraBusqueda from "../components/barraBusqueda";
const Home = () => {
  const [carrito, setCarrito] = useState([]);
  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);   
  };
  const eliminarDelCarrito = (indiceAEliminar) => {
      setCarrito(carrito.filter((_, indice) => indice !== indiceAEliminar));
    };
  

  return (
    <>
      <div className="contenedorHome">
        <BarraBusqueda />
          <div className="d-flex flex-column flex-md-row justify-content-evenly">
              <Producto agregarProducto={agregarAlCarrito}/>
              <div className="">
                <Carrito    productosEnCarrito={carrito}  productosEliminados={eliminarDelCarrito}/>
              </div>
              
          </div>
      </div>
    </>
  );
};
export default Home;
