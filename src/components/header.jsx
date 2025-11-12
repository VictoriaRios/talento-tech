import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4">
        <nav className="">
            <ul className="nav nav-pills">

                <Link to="/" className="">
                <img className="bi me-2" width="60" height="50" aria-hidden="true" src="../public/carrito.png" alt="Imagen Carrito" />
                </Link>
                <li className="nav-item">
                    <Link to="/" className="text-decoration-none">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/nosotros" className="text-decoration-none">About Us</Link>
                </li>
                <li className="nav-item">
                    <Link to="/contacto" className="text-decoration-none">Contact</Link>
                </li>
            </ul>
        </nav>
      </header>
    </>
  );
};
export default Header;

