import {useState, useEffect} from "react";

const EditarProducto=({productoSeleccionado}) =>{
    const [producto, setProducto] = useState(productoSeleccionado || {
        nombre: "",
        precio: "",
        descripcion: "",
        img1: "",
        img2: "",
        img: ""
    });
    
    const api = "https://6915079e84e8bd126af86cf9.mockapi.io/productos";
    useEffect(() =>{
        if(producto)
            setProducto(productoSeleccionado);
        },[productoSeleccionado]);
    
    const change = (evento) =>{
        const {name, value} = evento.target;
        setProducto({...producto, [name]: value});
    };

    const submit = async(evento) =>{
        evento.preventDefault();
        try {
            const respuesta = await fetch(`${api}/${producto.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(producto)
            });
            
            if (!respuesta.ok) 

            throw new Error("Error al editar el producto.");

            const datos = await respuesta.json();

            onActualizar(datos);

            alert("Producto editado correctamente");
        }catch (error) {
        console.error(error.message);
        alert("Error al editar el producto");
        };       
    };

    return(
        <form onSubmit={submit}>
        <h2>Editar Producto</h2>
        <div>
            <label>Nombre:</label>
            <br/>
            <input
            type="text"
            name="nombre"
            value={producto?.nombre || ''}
            onChange={change}
            required
            />
        </div>
        <div>
            <label>Precio:</label>
            <br/>
            <input
            type='number'
            name='precio'
            value={producto?.precio || ''}
            onChange={change}
            required
            min='0'
            step='any'
            />
        </div>
        <div>
            <label>URL de Imagen:</label>
            <br/>
            <input type='text' name='img1' value={producto?.img1} onChange={change}/>
        </div>
        <div>
            <label>Descripción:</label>
            <br/>
            <textarea name="descripcion" value={producto?.descripcion || ''} onChange={change} required />
            </div>
            <button type="submit">Actualizar Producto</button>
        </form>
    );
};

export default EditarProducto;