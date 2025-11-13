import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { IoArrowBackSharp } from "react-icons/io5";

const ProductoDetalle = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`https://6915079e84e8bd126af86cf9.mockapi.io/productos/${id}`)
      .then(res => res.json())
      .then(data => {
        setProducto(data);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="spinner-border text-info" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>;
  if (!producto) return <div>Producto no encontrado</div>;

  return (
    <>
    <Link to={`/` } className='text-decoration-none btn btn-primary'><IoArrowBackSharp /></Link>
    <div className="container my-4 text-white carousel slide " id="carouselExampleIndicators">
      <div className="carousel-indicators mb-2">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>

      <h2 className='mb-4'>{producto.nombre}</h2>
      <div className='carousel-inner justify-content-center align-items-center'>
        <div className='carousel-item active'>
          <img className="d-block mx-auto img-fluid rounded object-fit-cover" style={{ width: '400px', height: '400px'}} src={producto.img1} alt={producto.nombre}  />
        </div>
        <div className='carousel-item '>
          <img className="d-block mx-auto img-fluid rounded object-fit-cover" style={{ width: '400px', height: '400px'}} src={producto.img2} alt={producto.nombre}  />
        </div>
        <div className='carousel-item '>
          <img className="d-block mx-auto img-fluid rounded object-fit-cover" style={{ width: '400px', height: '400px'}} src={producto.img3} alt={producto.nombre}  />
        </div>
      </div>
      <p className='mt-4'>{producto.descripcion}</p>
      <h3><strong className='text-danger bg-white p-1'>{producto.precio.toLocaleString('es-AR', { style: 'currency', currency: 'ARS', minimumFractionDigits: '0',maximumFractionDigits: 0 })}</strong></h3>
      <br />
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    </>
  );
};

export default ProductoDetalle;