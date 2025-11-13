import { createContext, useState, useEffect } from "react";

export const ProductoContext = createContext();

export const ProductoProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(false);
  const api = "https://6915079e84e8bd126af86cf9.mockapi.io/productos";

  // Cargar productos al inicio
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
      console.error("Error al cargar productos:", error);
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
      alert("Producto agregado correctamente ✅");
    } catch (error) {
      console.error(error);
      alert("Error al agregar producto ❌");
    }
  };

  const eliminarProducto = async (id) => {
    const confirmar = window.confirm("¿Estás seguro de eliminar?");
    if (!confirmar) return;

    try {
      const res = await fetch(`${api}/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Error al eliminar producto");
      setProductos(productos.filter((p) => p.id !== id));
    } catch (error) {
      console.error(error);
      alert("Error al eliminar producto ❌");
    }
  };

  return (
    <ProductoContext.Provider
      value={{
        productos,
        cargando,
        agregarProducto,
        eliminarProducto,
      }}
    >
      {children}
    </ProductoContext.Provider>
  );
};
