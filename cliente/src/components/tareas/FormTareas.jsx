import React,{useContext,useState, Fragment, useEffect} from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext'
import tareaContext from '../../context/tareas/tareaContext'
import Error from './../layout/Error'
import uuid from 'uuid/dist/v4'
const FormTareas = () => {

    const [tarea, guardarTareas] = useState({
        nombre:" "
    });

    const {nombre} = tarea;

    const proyectosContext = useContext(proyectoContext);
    const {proyect} = proyectosContext;

    const tareasContext = useContext(tareaContext);
    const {aggTarea, errortarea, validarTarea, traerTareas,tareaseleccionada,editarTarea} = tareasContext;

    useEffect(() => {
        if(tareaseleccionada!==null){
            guardarTareas(tareaseleccionada)
        }else{
            guardarTareas({
                nombre:" "
            })
        }

    }, [tareaseleccionada])
    const Escucha= e => {
        guardarTareas({
            ...tarea,
            [e.target.name]:e.target.value
        })
    }
    const Enviando = e =>{
        e.preventDefault();
        if(nombre.trim()===''){
            validarTarea()
            return;
        }
        
        
        if(tareaseleccionada===null){
        tarea.id = uuid();
        tarea.idProject = proyect[0].id;
        tarea.estado=false;
        aggTarea(tarea);
        }else{
            editarTarea(tarea)
        }
        
        traerTareas(proyect[0].id);
        guardarTareas({
            nombre:" "
        });
    } 

    return (

        <Fragment>
            {
                (proyect===null) ? null
                :
                (
                    <div className="formulario">
                    <form
                    onSubmit={Enviando}>
                        <div className="contenedor-input">
                        <input
                        type="text"
                        className="input-text"
                        name="nombre"
                        onChange={Escucha}
                        value={nombre}
                        />
                        </div>
                        <div className="contenedor-input">
                            <input 
                            type="submit"
                            className="btn btn-primario btn-submit btn-block"
                            value={ tareaseleccionada ? "Editar Tarea" : "Agregar Tarea"}/>
                        </div>
                    </form>
                    {
                        errortarea ? <Error mensaje="Campos Vacios"/> : null
                    }
                </div>
                )
            }
       
        </Fragment>
      );
}
 
export default FormTareas;