import React,{useReducer} from 'react';
import authContext from './authContext';
import authReducer from './authReducer';
import clienteAxios from '../../config/axios';
import {
    REGISTRO_GOOD,
    REGISTRO_BAD,
    OBTENER_USUARIO,
    LOGIN_EXITOSO,
    LOGIN_ERROR,
    CERRAR_SESION

} from '../../types'

const AuthState = props => {

    const initialState = {
        token:localStorage.getItem('token'),
        autenticado:null,
        usuario:null,
        mensaje:null
    }

    const [state, dispatch] = useReducer(authReducer, initialState);

    const crearUsuario = async datos =>{
        try {
            const respuesta = await clienteAxios.post('/api/usuarios',datos);
            dispatch({
                type:REGISTRO_GOOD,
            });
            console.log(respuesta);
            
        } catch (error) {
            console.log(error);
            dispatch({
                type:REGISTRO_BAD
            });

        }
    }
    
    return(
        <authContext.Provider
        value={{
            token: state.token,
            autenticado: state.token,
            usuario:state.usuario,
            mensaje:state.mensaje,
            crearUsuario

        }}>
            {props.children}
        </authContext.Provider>

    )

}

export default AuthState;
