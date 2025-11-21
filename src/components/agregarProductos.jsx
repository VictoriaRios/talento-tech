import { useState, useContext, useEffect } from "react";
import { ProductoContext } from "../context/productosContext";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { IoArrowBackSharp } from "react-icons/io5";


const FormularioAdd = () => {
  const { agregarProducto, editarProducto, obtenerProducto } = useContext(ProductoContext);
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const idEditar = params.get("id"); 
    console.log("ID de edición:", idEditar);
  const [errores, setErrores] = useState({});
  const [producto, setProducto] = useState({
    nombre: "",
    precio: "",
    descripcion: "",
    img1: "",
    img2: "",
    img3: ""
  });

  useEffect(() => {
    if (idEditar) {
      const prod = obtenerProducto(idEditar);
      if (prod) {
        setProducto({
          nombre: prod.nombre,
          precio: prod.precio,
          descripcion: prod.descripcion,
          img1: prod.img1,
          img2: prod.img2,
          img3: prod.img3
        });
      }
    }
  }, [idEditar, obtenerProducto]);

  const handleChange = (evento) => {
    const { name, value } = evento.target;
    setProducto({ ...producto, [name]: value });
  };

  const validarFormulario = () => {
    const nuevosErrores = {};

    if (!producto.nombre.trim())
      nuevosErrores.nombre = "El nombre es obligatorio.";

    if (!producto.precio || producto.precio < 0)
      nuevosErrores.precio = "El precio debe ser mayor a 0.";

    if (!producto.img1.trim() || producto.img1.length < 10)
      nuevosErrores.img1 = "Debes subir la URL de una imagen válida.";

    if (!producto.img2.trim() || producto.img2.length < 10)
      nuevosErrores.img2 = "Debes subir la URL de una imagen válida.";

    if (!producto.img3.trim() || producto.img3.length < 10)
      nuevosErrores.img3 = "Debes subir la URL de una imagen válida.";

    if (!producto.descripcion.trim() || producto.descripcion.length < 10)
      nuevosErrores.descripcion =
        "La descripción debe tener al menos 10 caracteres.";

    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };

  const submit = async (evento) => {
  evento.preventDefault();
  if (!validarFormulario()) return;

  if (idEditar) {
    await editarProducto({
      id: idEditar,
      ...producto,
      precio: parseFloat(producto.precio)
    });

  } else {
    await agregarProducto({
      ...producto,
      precio: parseFloat(producto.precio)
    });
  }

  setProducto({
    nombre: "",
    precio: "",
    descripcion: "",
    img1: "",
    img2: "",
    img3: ""
  });

  setErrores({});
  navigate("/admin");
};


  return (
    <div className="container text-white p-4 my-4">
      <h2 className="mb-4">{idEditar ? "Editar Producto" : "Agregar Producto"}</h2>
      <Link to={`/admin`} className="text-decoration-none btn btn-primary">
        <IoArrowBackSharp />
      </Link>
      <form onSubmit={submit} className="bg-dark p-4 rounded">
        <div>
          <label className="form-label">Nombre:</label>
          <input
            className="form-control"
            type="text"
            name="nombre"
            value={producto.nombre}
            onChange={handleChange}
          />
          {errores.nombre && <p style={{ color: "red" }}>{errores.nombre}</p>}
        </div>
        <div>
          <label className="form-label">Precio:</label>
          <input
            className="form-control"
            type="number"
            name="precio"
            value={producto.precio}
            onChange={handleChange}
            min={0}
            step="any"
          />
          {errores.precio && <p style={{ color: "red" }}>{errores.precio}</p>}
        </div>
        <div>
          <label className="form-label">Descripción:</label>
          <textarea
            className="form-control"
            name="descripcion"
            value={producto.descripcion}
            onChange={handleChange}
          />
          {errores.descripcion && (
            <p style={{ color: "red" }}>{errores.descripcion}</p>
          )}
        </div>
        <div>
          <label className="form-label">Imagen 1:</label>
          <input
            className="form-control"
            type="text"
            name="img1"
            value={producto.img1}
            onChange={handleChange}
          />
          <label className="form-label">Imagen 2:</label>
          <input
            className="form-control"
            type="text"
            name="img2"
            value={producto.img2}
            onChange={handleChange}
          />
          <label className="form-label">Imagen 3:</label>
          <input
            className="form-control"
            type="text"
            name="img3"
            value={producto.img3}
            onChange={handleChange}
          />
          {errores.img1 && <p style={{ color: "red" }}>{errores.img1}</p>}
          {errores.img2 && <p style={{ color: "red" }}>{errores.img2}</p>}
          {errores.img3 && <p style={{ color: "red" }}>{errores.img3}</p>}
        </div>
        <button aria-label="Agregar Producto" className="mb-4 mt-4 btn btn-outline-success" type="submit">
          {idEditar ? "Actualizar Producto" : "Agregar Producto"}
        </button>
      </form>
    </div>
  );
};

export default FormularioAdd;
