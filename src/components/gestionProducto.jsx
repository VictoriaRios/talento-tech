import { useNavigate } from "react-router-dom";
import { useProducto } from "../context/productosContext";
import { CgTrash } from "react-icons/cg";
import { FaPen } from "react-icons/fa";
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";
import BarraBusqueda from "../components/barraBusqueda";
import { useState } from "react";

const GestionProducto = () => {
  const { productos, cargando, eliminarProducto } = useProducto();
  const navigate = useNavigate();

  const [paginaActual, setPaginaActual] = useState(1);
  const productosPorPagina = 10;

  const indiceInicio = (paginaActual - 1) * productosPorPagina;
  const indiceFin = indiceInicio + productosPorPagina;
  const productosPagina = productos.slice(indiceInicio, indiceFin);

  const totalPaginas = Math.ceil(productos.length / productosPorPagina);

  if (cargando) {
    return <div className="spinner-border text-info" role="status"></div>;
  }

  return (
    <div className="contenedor text-white container my-4">
      <BarraBusqueda />

      {productos.length > 0 ? (
        <>
          <table className="tabla table table-dark table-striped align-middle text-center mt-4">
            <thead>
              <tr>
                <th>Imagen</th>
                <th>Marca</th>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Acciones</th>
              </tr>
            </thead>

            <tbody>
              {productosPagina.map((producto) => (
                <tr key={producto.id}>
                  <td>
                    <img
                      src={producto.img1}
                      alt={producto.nombre}
                      className="img-thumbnail"
                      style={{ width: "100px", height: "100px" }}
                    />
                  </td>
                  <td>
                    <strong>{producto.marca}</strong>
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
                      aria-label="Eliminar Producto"
                      className="btn btn-danger btn-sm me-2"
                      onClick={() => eliminarProducto(producto.id)}
                    >
                      <CgTrash />
                    </button>
                    <button
                      aria-label="Editar Producto"
                      className="btn btn-success btn-sm"
                      onClick={() => navigate(`/add?id=${producto.id}`)}
                    >
                      <FaPen />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="d-flex justify-content-center gap-2 mt-3">
            <button
              className="btn btn-secondary"
              disabled={paginaActual === 1}
              onClick={() => setPaginaActual(paginaActual - 1)}
            >
              <GrLinkPrevious />
            </button>

            <span className="align-self-center">
              Página {paginaActual} de {totalPaginas}
            </span>

            <button
              className="btn btn-secondary"
              disabled={paginaActual === totalPaginas}
              onClick={() => setPaginaActual(paginaActual + 1)}
            >
              <GrLinkNext />
            </button>
          </div>
        </>
      ) : (
        <p>No hay productos cargados aún.</p>
      )}
    </div>
  );
};

export default GestionProducto;
