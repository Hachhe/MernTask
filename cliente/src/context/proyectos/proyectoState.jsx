import React,{useReducer} from 'react'
import uuid from 'uuid/dist/v4';
import proyectoContext from './proyectoContext'
import proyectoReducer from './proyectoReducer'
import {FORMULARIO_PROYECTO,
    OBTENER_PROYECTOS, 
    AGREGAR_PROYECTO, 
    ERROR_MENSAJE,
    PROYECTO_ACTUAL,
    ELIMINAR_PROYECTO} from '../../types/index'

const ProyectoState = props => {
    
    const proyectos = [
        {id:1 , name:'Tienda Virtual'},
        {id:2, name:'Otra'},
        {id:3 , name:'otra Virtual'}
    ];

    const InitialState = {
        proyectos : [],
        formulario: false,
        error:false,
        proyect: null
    }
    //dispach para ejecutar las acciones

    const [state, dispatch] = useReducer(proyectoReducer, InitialState);

    //funciones

    const mostrarForm = () =>{
        dispatch({
            type:FORMULARIO_PROYECTO
        })
    }
    const traerProyectos = () =>{
        dispatch({
            type:OBTENER_PROYECTOS,
            payload: proyectos
        })
    }
    const agregarProyectos = proyecto => {
        proyecto.id = uuid();
        dispatch({
            type:AGREGAR_PROYECTO,
            payload: proyecto
        })
    }

    const mostrarError = () =>{
        dispatch({
            type:ERROR_MENSAJE
        })
    }
    const seleccionarProyeto = id => {
        dispatch({
            type:PROYECTO_ACTUAL,
            payload: id
        })
    }
    const eliminarProyecto = id => {
        dispatch({
            type:ELIMINAR_PROYECTO,
            payload: id
        })
    }

    return(
        <proyectoContext.Provider
        value={{
            formulario: state.formulario,
            proyectos: state.proyectos,
            error: state.error,
            proyect: state.proyect,
            mostrarForm,
            traerProyectos,
            agregarProyectos,
            mostrarError,
            seleccionarProyeto,
            eliminarProyecto
        }}
        >
            {props.children}
        </proyectoContext.Provider>
    )
}
 
export default ProyectoState;