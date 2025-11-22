import { useCarrito } from "../context/carritoContext";
import { RxCross1 } from "react-icons/rx";
import { CiShoppingCart } from "react-icons/ci";
import { CiTrash } from "react-icons/ci";
const Carrito = () => {
  const {carrito, eliminarCarrito,total,vaciarCarrito} = useCarrito();

  if (carrito.length === 0) {
    return 
  }
  return (
    <>
    <div className="ms-4  " style={{ marginTop: "5%" }}>
      <h3 className="text-white">Carrito <CiShoppingCart /></h3>
      <CiTrash className="mb-1" style={{ color: "red",width:"50%", height:"2%" }} onClick={() => vaciarCarrito()}/>

      <div className=" card">
        {carrito.map((producto, id) => (
          
        <div key={id} className="m-2 p-2 rounded d-inline-flex align-items-center justify-content-between ">
          <p><strong> {producto.nombre} </strong> <br /> {producto.precio.toLocaleString('es-AR', { style: 'currency', currency: 'ARS', minimumFractionDigits: '0' ,maximumFractionDigits: 0 })} </p>
          <div key={producto.id}>
            <button aria-label="Eliminar del Carrito" className="bg-white text-danger border border-0" onClick={() => eliminarCarrito(producto.uid)}><RxCross1 /></button>
          </div>  
        </div>
      ))}
      </div>
      <h3 className="text-info mt-4">Total: {total.toLocaleString('es-AR', { style: 'currency', currency: 'ARS', minimumFractionDigits: '0',maximumFractionDigits: 0 })} </h3>
    </div>
    </>
  );
};
export default Carrito;
