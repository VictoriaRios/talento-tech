import {useState} from 'react';  
import { useNavigate } from 'react-router-dom';
import { useAutenticador } from '../context/autenticacionContext';
import { FaRegUser } from "react-icons/fa";
import { toast } from "react-toastify";
const Login = ()=>{
    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');

    const {login} = useAutenticador();
    const navigate = useNavigate();

    const submitLogin = (evento) =>{
        evento.preventDefault();
        if(usuario === 'admin' && password === 'admin123'){
            login(usuario);
            navigate('/admin');
            toast.success(`Bienvenido ${usuario}`,{position: "top-center",autoClose: 1500});
        }else{
            toast.warning("Acceso denegado",{position: "top-center",autoClose: 1500});
        }
    }

    return(
        <>
        <form onSubmit={submitLogin}>
            <div className='bg-white p-5 rounded-3'>
                <div className='iconUser'>
                <h1 className='mt-2 mb-4 ' ><FaRegUser className='fs-1'/></h1>
                </div>
                
                <div className='form-floating'>
                    <input type="text" className='form-control  border-dark-subtle' placeholder='Usuario' value={usuario} onChange={(evento) => setUsuario(evento.target.value)} />
                    <label for="floatingInput">Usuario</label>
                </div>
                <br />
                <div className='form-floating'>
                    <input type="password" className='form-control  border-dark-subtle' placeholder='Contraseña' value={password} onChange={(evento) => setPassword(evento.target.value)} />
                    <label for="floatingInput">Contraseña</label>
                </div>
                <br />
                <div className='iconUser'>
                    <button type='submit' className=' btn btn-primary' aria-label="Iniciar Sesión">Iniciar Sesión</button>
                </div>
                
            </div>
        </form>
        </>
    )
}

export default Login;