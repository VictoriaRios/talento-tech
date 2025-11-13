import { createContext, useState, useMemo} from "react";

export const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);

    const agregarAlCarrito = (producto) =>{
        setCarrito([...carrito, producto]);
    };

    const eliminarCarrito = (id) =>{
        setCarrito(carrito.filter((producto) => producto.id !== id));
    };

    const vaciarCarrito = () =>{
        setCarrito([]);
    }
    const total = useMemo(
    () => carrito.reduce((acc, producto) => acc + producto.precio, 0),
    [carrito]
  );

    return (
        <CarritoContext.Provider value={{carrito,agregarAlCarrito,eliminarCarrito,vaciarCarrito, total}}>{children}</CarritoContext.Provider>
    )
}