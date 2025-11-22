import { createContext, useState, useEffect, useContext } from "react";
import { toast } from "react-toastify";
export const ProductoContext = createContext();

export const ProductoProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(false);
  const api = "https://6915079e84e8bd126af86cf9.mockapi.io/productos";

  useEffect(() => {
    cargarProductos();
  }, []);

  const cargarProductos = async () => {
    try {
      setCargando(true);
      const res = await fetch(api);
      const data = await res.json();
      setProductos(data);
    } catch (error) {
      toast.warning("Ocurrió un error al cargar los productos.",{position: "top-center",autoClose: 1500});
    } finally {
      setCargando(false);
    }
  };

  const agregarProducto = async (producto) => {
    try {
      const res = await fetch(api, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(producto),
      });

      if (!res.ok) throw new Error("Error al agregar producto");

      const nuevo = await res.json();
      setProductos([...productos, nuevo]);
      toast.success("Producto agregado!",{position: "top-center",autoClose: 1500});
    } catch (error) {
      console.error(error);
      toast.warning("Ocurrió un error al agregar el producto.",{position: "top-center",autoClose: 1500});
    }
  };

  const eliminarProducto = async (id) => {
    const confirmar = window.confirm("¿Estás seguro de eliminar?");
    if (!confirmar) return;

    try {
      const res = await fetch(`${api}/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Error al eliminar producto");
      setProductos(productos.filter((p) => p.id !== id));
      toast.info("Producto eliminado",{position: "top-center",autoClose: 1500});
    } catch (error) {
      console.error(error);
      toast.warning("Ocurrió un error al eliminar el producto.",{position: "top-center",autoClose: 1500});
    }
  };
  const obtenerProducto = (id) => {
  return productos.find((p) => p.id === id);
};

  const editarProducto = async (producto) => {
  try {
    const res = await fetch(`${api}/${producto.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(producto),
    });

    if (!res.ok) throw new Error("Error al editar producto");

    toast.success("Producto editado exitosamente!",{position: "top-center",autoClose: 1500});

    await cargarProductos();

  } catch (error) {
    console.error(error);
    toast.warning("Ocurrió un error al editar el producto.",{position: "top-center",autoClose: 1500});
  }
};


  return (
    <ProductoContext.Provider
      value={{
        productos,
        cargando,
        agregarProducto,
        eliminarProducto,
        obtenerProducto,
        editarProducto
      }}
    >
      {children}
    </ProductoContext.Provider>
  );
};

export const useProducto = () => useContext(ProductoContext);