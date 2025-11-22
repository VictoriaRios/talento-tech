import { useState, useContext, createContext,useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
const AutenticacionContext = createContext();

export const AutenticacionProvider = ({ children }) => {
    const [usuario, setUsuario] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.removeItem("token");
        setUsuario(null);
    }, []);
    const login = (nombreUsuario) => {
        const token = 'fake-token-${nombreUsuario}';
        localStorage.setItem('token', token);
        setUsuario(nombreUsuario);
    }

    const logout = () =>{
        localStorage.removeItem('token');
        setUsuario(null);
        navigate('/');
        toast.warn("Sesión Cerrada",{position: "top-center",autoClose: 1500});
    }

    return(
        <AutenticacionContext.Provider value={{ usuario, login, logout }}>
            {children}
        </AutenticacionContext.Provider>
    )
}
export const useAutenticador = () => useContext(AutenticacionContext);