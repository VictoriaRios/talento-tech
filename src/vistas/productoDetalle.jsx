import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { CarritoContext } from "../context/carritoContext";

const ProductoDetalle = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const { agregarAlCarrito } = useContext(CarritoContext);
  useEffect(() => {
    fetch(`https://6915079e84e8bd126af86cf9.mockapi.io/productos/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProducto(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [id]);

  if (loading)
    return (
      <div className="spinner-border text-info" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  if (!producto) return <div>Producto no encontrado</div>;

  return (
    <>
    <div className="container prodDetalle rounded my-3 p-2 ">
      <div className="container my-4 text-black carousel slide " id="carouselExampleIndicators">
        <h3 className="mb-4 text-center text-decoration-underline">{producto.nombre}</h3>
        <div className="carousel-inner justify-content-center align-items-center">
          <div className="carousel-item active">
            <img className="d-block mx-auto img-fluid rounded object-fit-cover" style={{ width: "400px", height: "400px" }} src={producto.img1} alt={producto.nombre}/>
          </div>
          <div className="carousel-item ">
            <img className="d-block mx-auto img-fluid rounded object-fit-cover" style={{ width: "400px", height: "400px" }} src={producto.img2} alt={producto.nombre} />
          </div>
          <div className="carousel-item ">
            <img className="d-block mx-auto img-fluid rounded object-fit-cover" style={{ width: "400px", height: "400px" }} src={producto.img3} alt={producto.nombre} />
          </div>
        </div>
        <div className="card-info">
          <p><strong>Marca: </strong>{producto.marca}</p>
          <p className=""><strong>Descripción: </strong>{producto.descripcion}</p>
        </div>
        <div className="info">
          <h3><strong>{producto.precio.toLocaleString("es-AR", { style: "currency", currency: "ARS", minimumFractionDigits: "0", maximumFractionDigits: 0,})}</strong></h3>
          <button aria-label="Comprar" className="btn btn-outline-success mt-2" onClick={() => agregarAlCarrito(producto)}> Comprar </button>
        </div>
        
        
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev" aria-label="Previous"
        >
          <span className="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next" aria-label="Next"
        >
          <span className="carousel-control-next-icon bg-dark " aria-hidden="true"></span>
          
        </button>
      </div>
    </div>
    </>
  );
};

export default ProductoDetalle;
