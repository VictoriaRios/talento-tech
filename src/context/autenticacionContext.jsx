import { useState, useContext, createContext } from "react";

const AutenticacionContext = createContext();

export const AutenticacionProvider = ({ children }) => {
    const [usuario, setUsuario] = useState(null);

    const login = (nombreUsuario) => {
        const token = 'fake-token-${nombreUsuario}';
        localStorage.setItem('token', token);
        setUsuario(nombreUsuario);
    }

    const logout = () =>{
        localStorage.removeItem('token');
        setUsuario(null);
        
    }

    return(
        <AutenticacionContext.Provider value={{ usuario, login, logout }}>
            {children}
        </AutenticacionContext.Provider>
    )
}
export const useAutenticador = () => useContext(AutenticacionContext);