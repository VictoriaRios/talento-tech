import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useCarrito } from "../context/carritoContext";
import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";


const Producto = ({}) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [paginaActual, setPaginaActual] = useState(1);

  const productosPorPagina = 12;
  const { agregarAlCarrito } = useCarrito();

  const url = "https://6915079e84e8bd126af86cf9.mockapi.io/productos";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((datos) => setProductos(datos))
      .catch((error) => setError("Error:", error))
      .finally(() => setLoading(false));
  }, []);
  useEffect(() => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}, [paginaActual]);

  if (loading) {
    return (
      <div className="spinner-border text-info" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }

  const indiceInicio = (paginaActual - 1) * productosPorPagina;
  const indiceFin = indiceInicio + productosPorPagina;
  const productosPagina = productos.slice(indiceInicio, indiceFin);
  const totalPaginas = Math.ceil(productos.length / productosPorPagina);

  return (
    <div className="container">
      <h1 className="text-white mb-4 mt-5 ">Lista de Productos</h1>
      <div className="row">
        {productosPagina.map((producto) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={producto.id}>
            <div className="card cardPrincipal">
              <Link to={`/productos/${producto.id}`} className="text-decoration-none card-link-wrapper">
                <img
                  src={producto.img1}
                  alt={producto.title}
                  className="card-img-top border-bottom"
                />

                <div className="card-producto">
                  <h4 className="card-title">{producto.nombre}</h4>
                  <p className="card-text">
                    <strong>
                      {producto.precio.toLocaleString("es-AR", {
                        style: "currency",
                        currency: "ARS",
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                      })}
                    </strong>
                  </p>
                  <span className="text-primary">Ver más</span>
                </div>
              </Link>

              <button
                aria-label="Comprar"
                className="buttonComprar btn btn-outline-success mt-2"
                onClick={(e) => {
                  e.stopPropagation();
                  agregarAlCarrito(producto);
                }}
              >
                Comprar
              </button>
            </div>
          </div>

        ))}
      </div>
      <div className="d-flex justify-content-center gap-2 mt-3 mb-4">
                  <button
                    className="btn btn-secondary"
                    disabled={paginaActual === 1}
                    onClick={() => setPaginaActual(paginaActual - 1)}
                  >
                    <GrLinkPrevious />
                  </button>
      
                  <span className="align-self-center text-white">
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
    </div>
    
  );
};

export default Producto;
