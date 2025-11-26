import { Link } from "react-router-dom";
import { useAutenticador } from "../context/autenticacionContext";
import { FaUser } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";

const Header = () => {
  const { usuario, logout } = useAutenticador();
  const estaLogeado = !!usuario;
  return (
    <>
      <header className="d-flex flex-wrap  py-3 mb-4 border-bottom bg-">
        <div className="d-flex align-items-center mb-3 mb-md-0  link-body-emphasis text-decoration-none">
          <Link to="/" className="">
            <img
              className="me-2 rounded"
              width="60"
              height="50"
              aria-hidden="true"
              src="/logo.png"
              alt="Imagen Carrito"
            />
          </Link>
          <Link to="/" className="text-decoration-none"><span className="fs-4 text-white">Altas Zapas</span></Link>
          
        </div>
        <ul className="nav nav-pills">
          <li className="nav-item opcion">
            <Link to="/" className="nav-link text-decoration-none op">
              Inicio
            </Link>
          </li>

          <li className="nav-item opcion">
            <Link to="/nosotros" className="nav-link text-decoration-none op">
              Nosotros
            </Link>
          </li>

          <li className="nav-item opcion">
            <Link to="/contacto" className="nav-link text-decoration-none op">
              Contacto
            </Link>
          </li>

          {estaLogeado ? (
            <>
              <li className="nav-item opcion">
                <Link to="/admin" className="nav-link text-decoration-none op">
                  Gestión Productos
                </Link>
              </li>

              <li className="nav-item opcion">
                <button
                  onClick={logout}
                  aria-label="Cerrar Sesión"
                  className="btn btn-outline-danger ms-3"
                >
                  <FiLogOut />
                </button>
              </li>
            </>
          ) : (
            <li className="nav-item opcion">
              <Link to="/login">
                <button
                  aria-label="Iniciar Sesión"
                  className="btn btn-outline-primary"
                >
                  <FaUser />
                </button>
              </Link>
            </li>
          )}
        </ul>
      </header>
    </>
  );
};
export default Header;
