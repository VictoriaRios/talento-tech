import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Buscar = () => {
    const { termino } = useParams();
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    const url = "https://6915079e84e8bd126af86cf9.mockapi.io/productos";

    useEffect(() => {
        setLoading(true);

        fetch(url)
            .then(res => res.json())
            .then(data => {
                const filtrados = data.filter(prod =>
                    prod.nombre.toLowerCase().includes(termino.toLowerCase())
                );
                setProductos(filtrados);
            })
            .finally(() => setLoading(false));
    }, [termino]);

    if (loading) {
        return (
            <div className="spinner-border text-info mt-5" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        );
    }

    return (
        <>
        <div className="container my-4">
            <h1 className="text-white text-center mb-4">
                Resultados para: <span className="text-info">{termino}</span>
            </h1>

            {productos.length === 0 ? (
                <h3 className="text-center text-white">No se encontraron productos 😕</h3>
            ) : (
                <div className="row">
                    {productos.map(producto => (
                        <div className="col-md-4 mb-3" key={producto.id}>
                            <div className="card h-100">
                                <img
                                    src={producto.img1}
                                    alt={producto.nombre}
                                    className="card-img-top"
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{producto.nombre}</h5>
                                    <p className="card-text">{producto.description}</p>
                                    <strong>
                                        {producto.precio.toLocaleString("es-AR", {
                                            style: "currency",
                                            currency: "ARS",
                                            minimumFractionDigits: 0
                                        })}
                                    </strong>
                                    <br /><br />
                                    <Link
                                        to={`/productos/${producto.id}`}
                                        className="btn btn-outline-success"
                                    >
                                        Ver Detalles
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
        </>
    );
};

export default Buscar;
