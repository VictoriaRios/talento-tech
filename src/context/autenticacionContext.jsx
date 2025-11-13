import { useContext, useState, createContext } from "react";

const AutenContext = createContext();   
export const AutenProvider = ({children}) =>{
    const {usuario, setUsuario} = useState (null);

    const login = (nombre) =>{
        const token = 'fake-token-${nombre}';
        localStorage.setItem('token', token);
        setUsuario({nombre});
    };

    const logout = () =>{
        localStorage.removeItem('token');
        setUsuario (null);
    };

    return(
        <AutenContext.Provider value={{usuario, login, logout}}>
            {children}
        </AutenContext.Provider>    
    );
}

export const useAutenContext = () => useContext(AutenContext);