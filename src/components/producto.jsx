import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const Producto = ({agregarProducto}) =>{
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true); // Estado para saber si estamos cargando

    const agregarAlCarrito = (producto) => {
        setCarrito([...carrito, producto]);   
    };

    useEffect(() => {
        fetch("https://api.escuelajs.co/api/v1/products")
        .then((res) => res.json())
        .then((datos) => {
            setProductos(datos); // Guardamos los productos
            setLoading(false); // Terminó de cargar
        })
        .catch((error) => {
            console.error("Error:", error);
            setLoading(false); // Terminó de cargar aunque haya error
        });
    }, []);
    
    if (loading) {
    return <div className="spinner-border text-info" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>; // Mensaje mientras carga
    };


    return(
        <div className="container my-4">
      <h1 className="text-center text-white mb-4 mt-5">Lista de Productos</h1>
      <div className="row">
        {productos.slice(0, 9).map((producto) => (
          <div className="col-md-4 mb-3" key={producto.id}>
            <div className="card h-100">
              <img
                src={producto.images[0]}
                alt={producto.title}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">{producto.title}</h5>
                <p className="card-text">{producto.description}</p>
                <strong>${producto.price} USD</strong>
                <br />
                <br />
                <Link to={`/productos/${producto.id}` } className='text-decoration-none btn btn-outline-success'>Show more</Link>
                <br />
                <br />
                <button  className="btn btn-danger mt-2" onClick={() => agregarProducto(producto)}>Buy</button>
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    )
}

export default Producto;