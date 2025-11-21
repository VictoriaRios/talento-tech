import { Link } from "react-router-dom";
import { useAutenticador } from "../context/autenticacionContext";
import { FaUser } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";

const Header = () => {
  const {usuario, logout} = useAutenticador();
  const estaLogeado = !!usuario;
  return (
    <>
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4">
        <nav className="">
            <ul className="nav nav-pills">

                <Link to="/" className="">
                <img className="bi me-2" width="60" height="50" aria-hidden="true" src="/carrito.png" alt="Imagen Carrito" />
                </Link>
                <li className="nav-item">
                    <Link to="/" className="text-decoration-none text-dark ">Inicio</Link>
                </li>
                <li className="nav-item">
                    <Link to="/nosotros" className="text-decoration-none text-dark ">Nosotros</Link>
                </li>
                <li className="nav-item">
                    <Link to="/contacto" className="text-decoration-none text-dark ">Contacto</Link>
                </li>
                <li className="nav-item">
                  {estaLogeado ? (
                    <>
                      <Link to="/admin" className="text-decoration-none me-3 text-dark ">Gestión Productos</Link>
                      <Link to="/" className="text-decoration-none">
                        <button onClick={logout} aria-label="Cerrar Sesión" className="text-decoration-none btn btn-outline-danger ms-5"><FiLogOut /> Cerrar Sesión</button>
                      </Link>
                    </>
                  ) : (
                    <Link to="/login">
                      <button aria-label="Iniciar Sesión" className="text-decoration-none btn btn-outline-primary"><FaUser /></button>
                    </Link>
                  )}
                </li>


            </ul>
        </nav>
      </header>
    </>
  );
};
export default Header;

