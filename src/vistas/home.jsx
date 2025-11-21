import { use, useEffect, useState } from "react";
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
    <BarraBusqueda/>
    <div className="d-flex  justify-content-evenly">
        
        <Producto agregarProducto={agregarAlCarrito}/>
        <Carrito    productosEnCarrito={carrito}  productosEliminados={eliminarDelCarrito}/>
    </div>
    
    </>
  );
};

export default Home;
