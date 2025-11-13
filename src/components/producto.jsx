import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CarritoContext } from '../context/carritoContext';

const Producto = ({}) =>{

    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); 

    const{agregarAlCarrito} = useContext(CarritoContext);

    const url= "https://6915079e84e8bd126af86cf9.mockapi.io/productos";

    useEffect(() => {
        fetch(url)
        .then((res) => res.json())
        .then((datos) => { setProductos(datos);})
        .catch((error) => {setError("Error:", error);})
        .finally(()=> setLoading(false));
    }, []);
    
    if (loading) {
    return <div className="spinner-border text-info" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>;
    };


    return(
        <div className="container my-4">
      <h1 className="text-center text-white mb-4 mt-5">Lista de Productos</h1>
      <div className="row">
        {productos.slice(0, 9).map((producto) => (
          <div className="col-md-4 mb-3" key={producto.id}>
            <div className="card h-100">
              <img
                src={producto.img1}
                alt={producto.title}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">{producto.nombre}</h5>
                <p className="card-text">{producto.description}</p>
                <strong>{producto.precio.toLocaleString('es-AR', { style: 'currency', currency: 'ARS', minimumFractionDigits: '0',maximumFractionDigits: 0 })}</strong>
                <br />
                <br />
                <Link to={`/productos/${producto.id}` } className='text-decoration-none btn btn-outline-success'>Detalles</Link>
                <br />
                <br />
                <button  className="btn btn-danger mt-2" onClick={() => agregarAlCarrito(producto)}>Agregar</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    )
}

export default Producto;