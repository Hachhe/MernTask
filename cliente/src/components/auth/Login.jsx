import React, {useState} from 'react';
import {Link} from 'react-router-dom';
const Login = () => {

    const[datos, guardarDatos] = useState({
        email:'',
        password:''
    });

    const{email, password} = datos;
    const handleChange = e => {
        guardarDatos({
            ...datos,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();

        //validar que no este vacio
        //pasarlo al state
    }
    return ( 
       <div className="form-usuario">
           <div className="contenedor-form sombra-dark">
               <h1>Iniciar Sesión</h1>
               <form
               onSubmit={handleSubmit}
               >
                   <div className="campo-form">
                        <label htmlFor="email">Email: </label>
                            <input 
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Ingresa tu Email"
                                onChange={handleChange}
                                value={email}
                            />
                   </div>
                   <div className="campo-form">
                        <label htmlFor="password">Password: </label>
                            <input 
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Ingresa tu Password"
                                onChange={handleChange}
                                value={password}
                            />
                   </div>
                <div className="campo-form">
                    <input
                    type="submit"
                    className="btn btn-primario btn-block"
                    value="Inicar Sesion"/>

                </div>
            </form>
                <Link to={'/nueva-cuenta'} className="enlace-cuenta"> Obtener cuenta </Link>

               
           </div>
       </div>
     );
}
 
export default Login;