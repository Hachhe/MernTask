import {
    MOSTRAR_ALERTA,
    OCULTAR_ALERTA
} from '../../types'

import alertaContext from './alertaContext';

import alertaReducer from './alertaReducer';
import React,{useReducer} from 'react';

const AlertaState = props => {

    const InitialState = {
        alerta:null
    };

    const [state, dispatch] = useReducer(alertaReducer, InitialState);

    //funcion
    const mostrarAlerta = (msg, categoria) =>{
        dispatch({
            type:MOSTRAR_ALERTA,
            payload:{
                msg,
                categoria
            }
        })

        setTimeout(() => {
            dispatch({
                type:OCULTAR_ALERTA
            })
        }, 5000);
    }
    
    return ( 
        <alertaContext.Provider
            value={{
                alerta:state.alerta,
                mostrarAlerta
            }}
        >
            {props.children}
        </alertaContext.Provider>
     );
}
 
export default AlertaState;
