import {
    FORMULARIO_PROYECTO,
    FORMULARIO_PROYECTO2,
    OBTENER_PROYECTOS,
    AGREGAR_PROYECTO,
    VALIDAR_FORMULARIO,
    PROYECTO_ACTUAL
} from "../../types";


export default (state, action) => {
    switch (action.type) {
        case FORMULARIO_PROYECTO:
            return {
                ...state,
                nuevoProyectoF: true
            }

        case FORMULARIO_PROYECTO2:
            return {
                ...state,
                nuevoProyectoF: false,
                errorFormulario: false 
            }
        case OBTENER_PROYECTOS:
            return {
                ...state,
                proyectos: action.payload
            }

            case AGREGAR_PROYECTO:
                return {
                    ...state,
                    proyectos: [...state.proyectos, action.payload],
                    nuevoProyectoF: false,
                    errorFormulario: false 
                }

                case VALIDAR_FORMULARIO:
                    return{
                        ...state,
                        errorFormulario: true
                    }

        default: return state;
    }
}