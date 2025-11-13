import { useContext } from "react";
import { ProductoContext } from "../context/productosContext";
import { CgTrash } from "react-icons/cg";

const GestionProducto = () => {
  const { productos, cargando, eliminarProducto } = useContext(ProductoContext);

  if (cargando) {
    return (
      <div className="spinner-border text-info" role="status">
        <span className="visually-hidden">Cargando productos...</span>
      </div>
    );
  }

  return (
    <div className="text-white container my-4">
      <h2 className="mb-4">Productos Cargados</h2>
      {productos.length > 0 ? (
        <table className="table table-dark table-striped align-middle text-center">
          <thead>
            <tr>
              <th>Imagen</th>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {productos.map((producto) => (
              <tr key={producto.id}>
                <td>
                  <img
                    src={producto.img1}
                    alt={producto.nombre}
                    className="img-thumbnail"
                    style={{ width: "100px", height: "100px" }}
                  />
                </td>
                <td>{producto.nombre}</td>
                <td>
                  {producto.precio.toLocaleString("es-AR", {
                    style: "currency",
                    currency: "ARS",
                  })}
                </td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => eliminarProducto(producto.id)}
                  >
                    <CgTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No hay productos cargados aún.</p>
      )}
    </div>
  );
};

export default GestionProducto;
