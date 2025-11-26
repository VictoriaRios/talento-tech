import { createContext, useState, useMemo, useContext } from "react";
import { toast } from "react-toastify";

export const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);

    const agregarAlCarrito = (producto) => {
        setCarrito((prev) => {
        const existe = prev.find((item) => item.id === producto.id);

        if (existe) {
            return prev.map((item) =>
            item.id === producto.id
                ? { ...item, cantidad: item.cantidad + 1 }
                : item
            );
        }

        return [...prev, { ...producto, cantidad: 1 }];
        });

        toast.success("Producto agregado!", {
        position: "top-center",
        autoClose: 1500,
        });
    };

    const eliminarCarrito = (id) => {
        setCarrito((prev) => {
        const producto = prev.find((item) => item.id === id);

        if (producto.cantidad > 1) {
            return prev.map((item) =>
            item.id === id ? { ...item, cantidad: item.cantidad - 1 } : item
            );
        }

        return prev.filter((item) => item.id !== id);
        });

        toast.info("Producto eliminado", {
        position: "top-center",
        autoClose: 1500,
        });
    };

    const vaciarCarrito = () => {
        setCarrito([]);
        toast.warning("Carrito vaciado.", {
        position: "top-center",
        autoClose: 1500,
        });
    };
        const sumarCantidad = (id) => {
    setCarrito((prev) =>
        prev.map((item) =>
        item.id === id ? { ...item, cantidad: item.cantidad + 1 } : item
        )
    );
    };

    const total = useMemo(
        () =>
        carrito.reduce(
            (acc, producto) => acc + producto.precio * producto.cantidad,
            0
        ),
        [carrito]
    );

    return (
        <CarritoContext.Provider
        value={{
            carrito,
            agregarAlCarrito,
            eliminarCarrito,
            vaciarCarrito,
            sumarCantidad,
            total,
        }}
        >
        {children}
        </CarritoContext.Provider>
    );
    };

export const useCarrito = () => useContext(CarritoContext);
