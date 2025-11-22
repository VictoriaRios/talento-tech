const Contacto = () =>{
    return (
        <>
        <div className="firstContainer text-white">
            <div className="container1">
                <h3 className="text-decoration-underline mb-4">Ubicación</h3>
                <iframe src="https://www.google.com/maps/embed?pb=!3m2!1ses-419!2sar!4v1760048457887!5m2!1ses-419!2sar!6m8!1m7!1swDxF4tXmjQF90uN-YxvNww!2m2!1d-34.63730119890041!2d-58.52727549078308!3f17.27423923609132!4f3.0704736552759613!5f0.7820865974627469" width="600" height="450" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Ubicación del almacén"></iframe>
                
            </div>
            <div className="container2">
                <div>
                    <h4 className="">Dirección</h4>
                    <p>Bynon 6948</p>
                </div>
                <div>
                    
                    <h4 className="">Teléfono</h4>
                    <p>☎️​ +54 9 1132457895</p>
                    <p>☎️​ 4641-0123</p>
                </div>
                <div>
                    <h4 className="">Email</h4>
                    <p>📨 carrito@gmail.com</p>
                </div>
                <div>
                    <h4 className="">Redes</h4>
                    <p>🌐​ @carrito123</p>
                    
                </div>

            </div>
            </div>
        </>
    )
}
export default Contacto;