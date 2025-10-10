import { useEffect, useState } from "react";
const Carrito = ({productosEnCarrito, productosEliminados}) => {
  const [total, setTotal] = useState(0);
  
  useEffect(() => {
    const nuevoTotal = productosEnCarrito.reduce((acc, producto) => acc + producto.price, 0);
    setTotal(nuevoTotal);
  }, [productosEnCarrito]);

  if (productosEnCarrito.length === 0) {
    return 
  }
  return (
    <>
    <div className="mb-4">
      <h2 className="text-white">Carrito</h2>
      <div className="d-flex">
        {productosEnCarrito.map((producto, indice) => (
        <div key={indice} className="m-2 p-2  bg-secondary-subtle rounded">
          <img src={producto.images[indice]} alt={producto.title} height={80} width={80} />
          <p> {producto.title} : <br /> ${producto.price} USD</p>
          <button className="btn btn-danger" onClick={() => productosEliminados(indice)}>Eliminar</button>
        </div>
      ))}
      </div>
      <h3 className="text-info">Total: ${total} USD</h3>
    </div>
    </>
  );
};
export default Carrito;
