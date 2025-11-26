import GestionProductos from "../components/gestionProducto";
import { Link } from "react-router-dom";
import { IoAdd } from "react-icons/io5";

const Admin = () => {
  return (
    <div className=" container my-4">
      <div className=" containerAdmin d-flex justify-content-between align-items-center mb-4">
        <h1 className="text-white">Productos Cargados</h1>
        <Link to="/add"><button className="btn btn-primary ms-5" aria-label="Agregar Producto"><IoAdd /></button></Link>
      </div>
      <GestionProductos />
    </div>
  );
};
export default Admin;
