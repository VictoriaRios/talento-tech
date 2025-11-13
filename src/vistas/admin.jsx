import GestionProductos from "../components/gestionProducto";
import { Link } from "react-router-dom";
import { IoAdd } from "react-icons/io5";

const Admin = () => {
  return (
    <div className="container my-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="text-white">Gestión de Productos</h1>
        <Link to="/add"><button className="btn btn-primary ms-5"><IoAdd /></button></Link>
      </div>
      <GestionProductos />
    </div>
  );
};
export default Admin;
