import { use, useEffect, useState } from "react";
import Carrito from "../components/carrito";
import Producto from "../components/producto";
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
    <Producto agregarProducto={agregarAlCarrito}/>
    <hr className="text-white"/>
    <Carrito  productosEnCarrito={carrito}  productosEliminados={eliminarDelCarrito}/>
    </>
  );
};

export default Home;
