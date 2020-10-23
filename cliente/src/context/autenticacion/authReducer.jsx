import {
    REGISTRO_GOOD,
    REGISTRO_BAD,
    OBTENER_USUARIO,
    LOGIN_EXITOSO,
    LOGIN_ERROR,
    CERRAR_SESION

} from '../../types'

export default (state, action)=>{
    switch (action.type) {
        case REGISTRO_GOOD:
            localStorage.setItem('token', action.payload.token);
            return{
                ...state,
                autenticacion: true,
                mensaje:null
            }
        case REGISTRO_BAD:
            return{
                ...state,
                token:null,
                mensaje:action.payload
            }

        default:
            return state;
    }
}