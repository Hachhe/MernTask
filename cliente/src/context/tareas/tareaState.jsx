import React,{useReducer} from 'react'
import tareaContext from './tareaContext';
import tareaReducer from './tareaReducer'
import uuid from 'uuid/dist/v4'
import {
    OBTENER_TAREA, 
    AGREGAR_TAREA,
    ERROR_TAREA,
    ELIMINAR_TAREA,
    ESTATE_TAREA,
    TAREA_ACTUAL,
    EDITAR_TAREA } from '../../types/index'

const TareaState = props => {
    
    const InitialState = {
        tareasproyecto : null,
        tareas : [
            {id:1, nombre:"Hacer algo", estado:true, idProject:1},
            {id:2,nombre:"Hacer facil", estado:false, idProject:2},
            {id:3,nombre:"Hacer dificil", estado:false, idProject:3},
            {id:4,nombre:"Hacer comida", estado:true, idProject:4},
            {id:5,nombre:"Hacer encargooooooo", estado:true, idProject:3}
        ],
        errortarea:false,
        tareaseleccionada:null
    }

    const [state, dispatch] = useReducer(tareaReducer, InitialState);

    //funciones
    const validarTarea = () =>{
        dispatch({
            type:ERROR_TAREA
        })
    }
    const traerTareas = id =>{
        dispatch({
            type:OBTENER_TAREA,
            payload: id
        })
    }
    const aggTarea = tarea =>{
        dispatch({
            type:AGREGAR_TAREA,
            payload: tarea
        })
    }
    const eliminarTarea = id => {
        dispatch({
            type:ELIMINAR_TAREA,
            payload:id
        })
    }

    const cambiarEstate = tarea =>{
        dispatch({
            type:ESTATE_TAREA,
            payload: tarea
        })
    }
    
    const tareaActual = tarea =>{
        dispatch({
            type:TAREA_ACTUAL,
            payload: tarea
        })
    }
    
    const editarTarea = tarea =>{
        dispatch({
            type:EDITAR_TAREA,
            payload: tarea
        })
    }
    
    
    return (
        <tareaContext.Provider
        value={{
            tareasproyecto:state.tareasproyecto,
            tareas:state.tareas,
            errortarea:state.errortarea,
            tareaseleccionada:state.tareaseleccionada,
            traerTareas,
            aggTarea,
            validarTarea,
            eliminarTarea,
            cambiarEstate,
            tareaActual,
            editarTarea
            
        }}>
            {props.children}
        </tareaContext.Provider>
      );
}
 
export default TareaState;