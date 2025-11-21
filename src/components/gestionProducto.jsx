import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ProductoContext } from "../context/productosContext";
import { CgTrash } from "react-icons/cg";
import { FaPen } from "react-icons/fa";

const GestionProducto = () => {
  const { productos, cargando, eliminarProducto } = useContext(ProductoContext);
  const navigate = useNavigate();
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
              <th>ID</th>
              <th>Imagen</th>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {productos.map((producto) => (
              <tr key={producto.id}>
                <td><p>{producto.id}</p></td>
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
                  <button aria-label="Eliminar Producto"
                    className="btn btn-danger btn-sm me-2 "
                    onClick={() => eliminarProducto(producto.id)}
                  >
                    <CgTrash />
                  </button>
                  <button aria-label="Editar Producto" className="btn btn-success btn-sm" onClick={() => navigate(`/add?id=${producto.id}`)}>
                    <FaPen />
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
