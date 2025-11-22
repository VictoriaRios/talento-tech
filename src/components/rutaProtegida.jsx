import { useAutenticador } from "../context/autenticacionContext";
import { Navigate } from "react-router-dom";

const RutaProtegida = ({ children }) => {
  const { usuario } = useAutenticador();

  if (!usuario) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default RutaProtegida;
