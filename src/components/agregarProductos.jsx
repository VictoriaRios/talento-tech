import {useState, useContext} from "react";
import { ProductoContext } from "../context/productosContext";
import { Link, useNavigate } from "react-router-dom";
import { IoArrowBackSharp } from "react-icons/io5";

const FormularioAdd = ({}) =>{
    const { agregarProducto} = useContext(ProductoContext); 
    const navigate = useNavigate();
    const [errores, setErrores] = useState({});
    const [producto, setProducto] = useState({
        nombre: "",
        precio: "",
        descripcion: "",
        img1: "",
        img2: "",
        img3: ""
    });

    const handleChange = (evento) =>{
        const {name, value} = evento.target;
        setProducto({...producto, [name]: value});
    }

    const validarFormulario = () =>{
        const nuevosErrores = {};

        if(!producto.nombre.trim()) 
            nuevosErrores.nombre = 'El nombre es obligatorio.'

        if(!producto.precio || producto.precio < 0)
            nuevosErrores.precio = 'El precio debe ser mayor a 0.'

        if (!producto.img1.trim() || producto.img1.length < 10)  
        nuevosErrores.img1 = 'Debes subir la URL de una imagen válida.';
    
        if (!producto.img2.trim() || producto.img2.length < 10)  
        nuevosErrores.img2 = 'Debes subir la URL de una imagen válida.';

        if (!producto.img3.trim() || producto.img3.length < 10)  
        nuevosErrores.img3 = 'Debes subir la URL de una imagen válida.';

        if (!producto.descripcion.trim() || producto.descripcion.length < 10)  
            nuevosErrores.descripcion = 'La descripción debe tener al menos 10 caracteres.';  
 
        setErrores(nuevosErrores); 
        
        return Object.keys(nuevosErrores).length === 0; 
    }

    const submit = async (evento) => {
    evento.preventDefault();

    if (!validarFormulario()) return;

    await agregarProducto({ ...producto, precio: parseFloat(producto.precio) });
    navigate("/admin");
    setProducto({
        nombre: "",
        precio: "",
        descripcion: "",
        img1: "",
        img2: "",
        img3: ""
    });
    setErrores({});
};

    
    return(
        <>
        <div className="container text-white p-4 my-4">
            <h2 className="mb-4">Agregar Producto</h2>
            <Link to={`/admin` } className='text-decoration-none btn btn-primary'><IoArrowBackSharp /></Link>
            <form onSubmit={submit} className=" bg-dark p-4 rounded ">
                
                <div>
                    <label className="form-label">Nombre:</label>
                    <br />
                    <input className="form-control" type="text" name="nombre" value={producto.nombre} onChange={handleChange} min={0} step='any' />
                    {errores.nombre && <p className="form-text" style={{ color: 'red' }}>{errores.nombre}</p>}
                </div>
                <div>
                    <label className="form-label">Precio:</label>
                    <br />
                    <input className="form-control" type="number" name="precio" value={producto.precio} onChange={handleChange} min={0} step='any' />
                    {errores.precio && <p className="form-text" style={{ color: 'red' }}>{errores.precio}</p>}
                </div>
                <div>
                    <label className="form-label">Descripción:</label>
                    <br />
                    <textarea className="form-control" name="descripcion" value={producto.descripcion} onChange={handleChange} />
                    {errores.descripcion && <p className="form-text" style={{ color: 'red' }}>{errores.descripcion}</p>} 
                </div>
                <div>
                    <label className="form-label">Imagen 1:</label>
                    <br />
                    <input className="form-control" type="text" name="img1" value={producto.img1} onChange={handleChange} />
                    <br />
                    <label className="form-label">Imagen 2:</label>
                    <br />
                    <input className="form-control" type="text" name="img2" value={producto.img2} onChange={handleChange} />
                    <br />
                    <label className="form-label">Imagen 3:</label>
                    <br />
                    <input className="form-control" type="text" name="img3" value={producto.img3} onChange={handleChange} />

                    {errores.img1 && <p className="form-text" style={{ color: 'red' }}>{errores.img1}</p>} 
                    {errores.img2 && <p className="form-text" style={{ color: 'red' }}>{errores.img2}</p>} 
                    {errores.img3 && <p className="form-text" style={{ color: 'red' }}>{errores.img3}</p>} 
                </div>
                <button className="mb-4 mt-4 btn btn-outline-success" type="submit">Agregar Producto</button>
            </form>
            </div>
        </>
    );}
export default FormularioAdd;
