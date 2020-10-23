import {FORMULARIO_PROYECTO,
     OBTENER_PROYECTOS,
     AGREGAR_PROYECTO,
     ERROR_MENSAJE,
     PROYECTO_ACTUAL,
     ELIMINAR_PROYECTO
    } from '../../types/index'
export default (state, action) => {
    switch (action.type) {
        case FORMULARIO_PROYECTO:
            return{
                ...state,
                formulario:true
            }
        case OBTENER_PROYECTOS:
            return{
                ...state,
                proyectos: action.payload
            }
        case AGREGAR_PROYECTO:
            return{
                    ...state,
                    proyectos: [...state.proyectos, action.payload ],
                    formulario:false,
                    error:false
            }
        case ERROR_MENSAJE:
            return{
                ...state,
                error:true
            }
        case PROYECTO_ACTUAL:
            return{
                ...state,
                proyect : state.proyectos.filter(p => p.id === action.payload),
            }
        case ELIMINAR_PROYECTO:
                return{
                    ...state,
                    proyectos : state.proyectos.filter(p => p.id !== action.payload),
                    proyect : null
                }            
            default:     
            return state;
    }
}