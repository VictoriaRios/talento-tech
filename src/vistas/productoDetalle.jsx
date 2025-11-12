import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const ProductoDetalle = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
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
    <Link to={`/` } className='text-decoration-none btn btn-primary'>Return</Link>
    <div className="container my-4 text-white">
      <h2>{producto.title}</h2>
      <img src={producto.images[0]} alt={producto.title} height={200} />
      <p>{producto.description}</p>
      <h3><strong className='text-danger'>${producto.price} USD</strong></h3>
    </div>
    </>
  );
};

export default ProductoDetalle;
