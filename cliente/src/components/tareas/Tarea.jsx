import React,{useContext, Fragment} from 'react';
import tareaContext from '../../context/tareas/tareaContext'
import proyectoContext from '../../context/proyectos/proyectoContext'

const Tarea = ({tarea}) => {

    const tareasContext = useContext(tareaContext);
    const{ eliminarTarea,traerTareas, cambiarEstate, tareaActual} = tareasContext;
    
    const proyectosContext = useContext(proyectoContext);
    const{ proyect } = proyectosContext;
    
    const Eliminar = () => {
        eliminarTarea(tarea.id);
        traerTareas(proyect[0].id);
    }

    const Cambio = tarea =>{
        if(tarea.estado){
            tarea.estado=false;
        }else{
            tarea.estado=true;
        }
        
        cambiarEstate(tarea);
    }

    const Seleccion = tarea =>{
        tareaActual(tarea)
    }
    return ( 
   <li className="tarea sombra">
      <p> {tarea.nombre}</p>
      <div className="estado">
          {
              tarea.estado
              ? (
                  <button
                  type="button"
                  className="completo"
                  onClick={() => Cambio(tarea)}>
                      Completo
                  </button>
                )
            : 
            (
                    <button
                    type="button"
                    className="incompleto"
                    onClick={() => Cambio(tarea)}>
                        Incompleto
                    </button>
                  )    
          }
      </div>

      <div className="acciones">

          <button
          type="button"
          className="btn btn-primario"
          onClick={()=>Seleccion(tarea)}
         >
              Editar
          </button>
          <button
          type="button"
          className="btn btn-secundario"
          onClick={Eliminar}>
              Eliminar
          </button>
      </div>
   </li>

     );
}
 
export default Tarea;