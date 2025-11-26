import { useCarrito } from "../context/carritoContext";
import { RxCross1 } from "react-icons/rx";
import { CiShoppingCart } from "react-icons/ci";
const Carrito = () => {
  const {carrito, eliminarCarrito,total,vaciarCarrito,sumarCantidad} = useCarrito();
  
  if (carrito.length === 0) {
    return 
  }
  return (
    <>
    <div className="carrito-wrapper  ms-2  bg-white p-4 rounded" style={{ marginTop: "5%" }}>
      <div className="text-center text-decoration-underline">
        <h3 className="text-dark">Carrito <CiShoppingCart /></h3>
      </div>
      
      <p onClick={() => vaciarCarrito()} className="text-danger text-end " role="button">Eliminar todo</p>
      

      <div className=" card " style={{width: "18rem"}}>
        {carrito.map((producto, id) => (
          
        <div key={id} className="m-2 p-2 rounded d-inline-flex align-items-center justify-content-between ">
          <p><strong> {producto.nombre} </strong> <br /> {producto.precio.toLocaleString('es-AR', { style: 'currency', currency: 'ARS', minimumFractionDigits: '0' ,maximumFractionDigits: 0 })} </p>
          <div className="d-flex align-items-center">
                <button
                  className="btn btn-light"
                  onClick={() => eliminarCarrito(producto.id)}
                >
                  –
                </button>

                <span className="mx-2">{producto.cantidad}</span>

                <button
                  className="btn btn-light"
                  onClick={() => sumarCantidad(producto.id)}
                >
                  +
                </button>
              </div>
          <div key={producto.id}>
            <button aria-label="Eliminar del Carrito" className="bg-white text-danger border border-0" onClick={() => eliminarCarrito(producto.id)}><RxCross1 /></button>
          </div>  
        </div>
      ))}
      </div>
      <div>
        <strong><h3 className="text-dark mt-4 text-center">Total: {total.toLocaleString('es-AR', { style: 'currency', currency: 'ARS', minimumFractionDigits: '0',maximumFractionDigits: 0 })} </h3></strong>
      </div>
      
    </div>
    </>
  );
};
export default Carrito;
