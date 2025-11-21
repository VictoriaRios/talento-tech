import { createContext, useState, useMemo} from "react";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";
export const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);

    const agregarAlCarrito = (producto) =>{
        setCarrito([...carrito, { ...producto, uid: uuidv4() }]);
        toast.success("Producto agregado!");

    };

    const eliminarCarrito = (uid) => {
        setCarrito(carrito.filter((producto) => producto.uid !== uid));
        toast.info("Producto eliminado");
    };


    const vaciarCarrito = () =>{
        setCarrito([]);
        toast.warning("Carrito vaciado.");
    }
    
    const total = useMemo(
    () => carrito.reduce((acc, producto) => acc + producto.precio, 0),
    [carrito]
  );

    return (
        <CarritoContext.Provider value={{carrito,agregarAlCarrito,eliminarCarrito,vaciarCarrito, total}}>{children}</CarritoContext.Provider>
    )
}