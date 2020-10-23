import React,{Fragment, useState, useContext} from 'react';
import Error from '../layout/Error'
import proyectoContext from '../../context/proyectos/proyectoContext'
const NuevoProyecto = () => {


    const proyectosContext = useContext(proyectoContext);
    const {error, formulario, mostrarForm, agregarProyectos, mostrarError} = proyectosContext;
    const [datos, guardarDatos] = useState({
        name:''
    });

    const {name} = datos;
    const Cambio = e => {
        guardarDatos({
            ...datos,
            [e.target.name]: e.target.value
        })
      }

    const Enviar = e =>{
        e.preventDefault();
        if(name.trim()===''){
            mostrarError()
            return;
        }
        agregarProyectos(datos);
        guardarDatos({
            name:''
        });
    } 


    return ( 
        <Fragment>

            <button
                type="button"
                className="btn btn-block btn-primario"
                onClick={mostrarForm}
                
                >
                Nuevo Proyecto
            </button>
            {
            formulario ?
            (
                <form 
                className="formulario-nuevo-proyecto"
                onSubmit={Enviar}>
                       <input
                        type="text"
                        className="input-text"
                        placeholder="Nombre de Proyecto"
                        name="name"
                        onChange={Cambio}
                        value={name}/>
                        <input
                        type="submit"
                        className="btn btn-block btn-primario"
                        value="Agregar proyecto"/>
        
                </form>
            )

            :null
        }
               {
            error ? <Error mensaje="Campos Vacios"/> : null
        }
        </Fragment>
     );
}
 
export default NuevoProyecto;