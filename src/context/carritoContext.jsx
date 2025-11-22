import { createContext, useState, useMemo, useContext} from "react";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";
export const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);

    const agregarAlCarrito = (producto) =>{
        setCarrito([...carrito, { ...producto, uid: uuidv4() }]);
        toast.success("Producto agregado!",{position: "top-center",autoClose: 1500});

    };

    const eliminarCarrito = (uid) => {
        setCarrito(carrito.filter((producto) => producto.uid !== uid));
        toast.info("Producto eliminado",{position: "top-center",autoClose: 1500});
    };


    const vaciarCarrito = () =>{
        setCarrito([]);
        toast.warning("Carrito vaciado.",{position: "top-center",autoClose: 1500});
    }
    
    const total = useMemo(
    () => carrito.reduce((acc, producto) => acc + producto.precio, 0),
    [carrito]
  );

    return (
        <CarritoContext.Provider value={{carrito,agregarAlCarrito,eliminarCarrito,vaciarCarrito, total}}>{children}</CarritoContext.Provider>
    )
}
export const useCarrito = () => useContext(CarritoContext);