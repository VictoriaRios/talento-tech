import { useState } from 'react';  
import { useNavigate } from "react-router-dom";

const BarraBusqueda = () => {
    const [busqueda, setBusqueda] = useState('');
    const navigate = useNavigate();

    const submitBusqueda = (evento) =>{
        evento.preventDefault();
        if (!busqueda.trim()) return; // evita búsqueda vacía  
        
        navigate(`/buscar/${busqueda}`);
    }

    return(
        <div>
            <form className="d-flex" role="search" onSubmit={submitBusqueda}>
                <input 
                    className="form-control me-2" 
                    type="search" 
                    placeholder="Buscar producto" 
                    value={busqueda}
                    onChange={(e) => setBusqueda(e.target.value)}
                />
                <button aria-label="Barra de Busqueda" className="btn btn-outline-success" type="submit">Buscar</button>
            </form>
        </div>
    )
}

export default BarraBusqueda;
