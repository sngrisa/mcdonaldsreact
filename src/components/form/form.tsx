import "./form.css";

let Form = () => {
    return (
        <>
            <div className="background-users">
                <div className="hero-body">
                    <div className="container register">
                        <form className="box">
                            <h1><b><i className="bi bi-input-cursor-text bi-icon"></i> Regístrate para obtener una cuenta</b></h1>
                            <hr></hr>
                            <h2 className="mb-5"> <b>Estás a solo unos pasos de usar McDonalds Shop Service más cuando te registras para obtener una
                                cuenta en McDonalds. Crea una nueva cuenta o usa una dirección de correo electrónico existente de cualquier
                                proveedor de correo electrónico; solo deberás proporcionar tus datos personales a continuación.</b></h2>
                                <hr></hr>
                            <div className="columns ">
                                <div className="column">
                                    <label htmlFor="nombre"><b>Nombre:</b></label>
                                    <input type="text" placeholder="Ingrese su nombre" className="input" name="nombre" id="nombre" />
                                </div>
                                <div className="column">
                                    <label htmlFor="apellido"><b>Apellido:</b></label>
                                    <input type="text" placeholder="Ingrese su apellido" className="input" name="apellido" id="apellido" />
                                </div>
                            </div>
                            <div className="columns">
                                <div className="column">
                                    <label htmlFor="email"><b>Email:</b></label>
                                    <input type="email" placeholder="Ingrese su email" className="input" name="email" id="email" />
                                </div>
                                <div className="column">
                                    <label htmlFor="telefono"><b>Telefono:</b></label>
                                    <input type="number" placeholder="Ingrese su telefono" className="input" name="telefono" id="telefono" />
                                </div>
                            </div>
                            <div className="columns">
                                <div className="column">
                                    <label htmlFor="password"><b>Password:</b></label>
                                    <input type="password" placeholder="Ingrese la contraseña" className="input" name="password" id="password" />
                                </div>
                                <div className="column">
                                    <label htmlFor="confirmPassword"><b>Confirm Password:</b></label>
                                    <input type="password" placeholder="Confirme la contraseña" className="input" name="confirmPassword" id="confirmPassword" />
                                </div>
                            </div>
                            <hr></hr>
                            <button type="submit" className="button is-success is-fullwidth"><i className="bi bi-database-add bi-icon"></i> Crear Cuenta</button>
                            <div className="has-text-centered back">
                                <p className="is-size-7"><a href="/login" className="has-text-secondary">Volver a la pagina de Login</a>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Form;