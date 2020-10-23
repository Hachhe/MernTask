import React,{useContext} from 'react'
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext'
const Proyecto = ({proyecto}) => {
    const proyectosContext = useContext(proyectoContext);
    const {seleccionarProyeto} = proyectosContext;
    
    const tareasContext = useContext(tareaContext);
    const {traerTareas} = tareasContext;

    const seleccionarID = id =>{
        seleccionarProyeto(id);
        traerTareas(id);
    }

    return ( 
        <li>
            <button
            type="button"
            className="btn btn-blank"
            onClick={()=> seleccionarID(proyecto.id)}
            >
                {proyecto.name}
            </button>
        </li>
     );
}
 
export default Proyecto;