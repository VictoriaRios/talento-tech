import { useContext } from "react";
import { CarritoContext } from "../context/carritoContext";
import { RxCross1 } from "react-icons/rx";

const Carrito = () => {
  const {carrito, eliminarCarrito,total} = useContext(CarritoContext);

  if (carrito.length === 0) {
    return 
  }
  return (
    <>
    <div className="mb-4">
      <h2 className="text-white">Carrito</h2>
      <div className="d-flex">
        {carrito.map((producto, id) => (
          
        <div key={id} className="m-2 p-2  bg-secondary-subtle rounded">
          <div key={producto.id}>
          <button className="bg-secondary-subtle text-danger border border-none" onClick={() => eliminarCarrito(producto.id)}><RxCross1 /></button>
          </div>
          <img src={producto.img1} alt={producto.nombre} height={80} width={80} />
          <p> {producto.nombre} : <br /> {producto.precio.toLocaleString('es-AR', { style: 'currency', currency: 'ARS', minimumFractionDigits: '0',maximumFractionDigits: 0 })} </p>
          
          
        </div>
      ))}
      </div>
      <h3 className="text-info">Total: {total.toLocaleString('es-AR', { style: 'currency', currency: 'ARS', minimumFractionDigits: '0',maximumFractionDigits: 0 })} </h3>
    </div>
    </>
  );
};
export default Carrito;
