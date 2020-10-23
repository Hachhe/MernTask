import React,{Fragment, useContext, useEffect} from 'react'
import proyectoContext from '../../context/proyectos/proyectoContext'
import tareaContext from '../../context/tareas/tareaContext'
import{CSSTransition,TransitionGroup} from 'react-transition-group'
import Tarea from './Tarea'
const ListadoTareas = () => {;

    
    const tareasContext = useContext(tareaContext);
    const {tareasproyecto} = tareasContext;
    
    const proyectosContext = useContext(proyectoContext);
    const {proyect,eliminarProyecto} = proyectosContext;

    const Eliminar = () => {
        eliminarProyecto(proyect[0].id)
    }

    if (proyect === null) return <h2>Selecciona un proyecto!</h2>
    return ( 

        <Fragment>
           
        <h1>Proyecto: {proyect[0].name}</h1>
            <ul className="listado-tareas">
                {tareasproyecto.length===0
                    ? (<li className="tarea"><p>No hay tareas disponibles</p></li>)
                    : 
                    <TransitionGroup>
                    
                {
                    
                    tareasproyecto.map(tarea => (
                            <CSSTransition
                                key={tarea.id}
                                timeout={200}
                                classNames="tarea">

                                        <Tarea
                                    tarea={tarea}/>
                                    
                            </CSSTransition>
                        ))
                    
                }

                    </TransitionGroup>
                       
                    
                }
            </ul>

            <button
            type="button"
            className="btn btn-eliminar"
            onClick={Eliminar}>
                Eliminar Proyecto &times;
            </button>
        </Fragment>

     );
}
 
export default ListadoTareas;