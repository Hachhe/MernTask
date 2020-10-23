import React, {useState, useContext} from 'react';
import {Link} from 'react-router-dom';
import AlertaContext from '../../context/alertas/alertaContext';
import AuthContext from '../../context/autenticacion/authContext';
const NuevaCuenta = () => {

    const alertaContext  = useContext(AlertaContext);
    const {alerta, mostrarAlerta} = alertaContext;

    
    const authContext  = useContext(AuthContext);
    const {crearUsuario} = authContext;


    const[datos, guardarDatos] = useState({
        nombre:'',
        email:'',
        password:'',
        confirmar:''
    });

    const{nombre,email, password, confirmar} = datos;
    const handleChange = e => {
        guardarDatos({
            ...datos,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();

        //validar que no este vacio

        if(nombre.trim()==="" ||email.trim()==="" ||password.trim()==="" ||confirmar.trim()==="" ){
            mostrarAlerta("Todos los campos son obligatorios","alerta-error");
            return;
        }
        //pasword > 6 

        if(password.length < 6 ){
            mostrarAlerta("Password minimo de 6 caracteres","alerta-error");
            return;
        }
        //Password ==
         if(password !== confirmar ){
            mostrarAlerta("Password deben ser iguales","alerta-error");
            return;
        }
        //pasarlo al state

        crearUsuario(
            nombre,
            email, 
            password
        );
    }
    return ( 
       <div className="form-usuario">
           {
               alerta ? (<div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>)
               :null
           }
           <div className="contenedor-form sombra-dark">
               <h1>Iniciar Sesión</h1>
               <form
               onSubmit={handleSubmit}
               >
                   <div className="campo-form">
               <label htmlFor="nombre">Nombre: </label>
                   <input 
                       type="text"
                       name="nombre"
                       id="nombre"
                       placeholder="Ingresa tu Nombre"
                       onChange={handleChange}
                       value={nombre}
                   />
                </div>
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
                        <label htmlFor="confirmar">Confirmar Password: </label>
                            <input 
                                type="password"
                                name="confirmar"
                                id="confirmar"
                                placeholder="Confirmar Password"
                                onChange={handleChange}
                                value={confirmar}
                            />
                   </div>
                <div className="campo-form">
                    <input
                    type="submit"
                    className="btn btn-primario btn-block"
                    value="Registrarme"/>

                </div>
            </form>
                <Link to={'/'} className="enlace-cuenta"> Volver a inicio </Link>

               
           </div>
       </div>
     );
}
 
export default NuevaCuenta;