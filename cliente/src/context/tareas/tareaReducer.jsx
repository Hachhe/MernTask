import {ESTATE_TAREA,
    OBTENER_TAREA,
    AGREGAR_TAREA,
    ERROR_TAREA,
    ELIMINAR_TAREA,
    TAREA_ACTUAL,
    EDITAR_TAREA
   } from '../../types/index'
export default (state, action) => {
    switch (action.type) {
        case OBTENER_TAREA:
            return {
                ...state,
                tareasproyecto: state.tareas.filter(f => f.idProject === action.payload)
            }
        case AGREGAR_TAREA: 
            return{
                ...state,
                tareas: [action.payload,...state.tareas ],
                errortarea:false
            }
        case ERROR_TAREA: 
            return{
                ...state,
                errortarea:true
            }     
        case ELIMINAR_TAREA:
            return{
                ...state,
                tareas: state.tareas.filter(f => f.id !== action.payload)
            }     
        case EDITAR_TAREA:  
        case ESTATE_TAREA:
            return{
                ...state,
                tareas: state.tareas.map(f => f.id === action.payload.id ? action.payload : f),
                tareaseleccionada:null
            }
        case TAREA_ACTUAL:
            return{
                ...state,
                tareaseleccionada: action.payload
            }

        default:
            return state;
    }
}