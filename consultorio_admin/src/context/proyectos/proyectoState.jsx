import { useReducer } from "react";
import proyectoContext from "./proyectoContext";
import proyectoReducer from "./proyectoReducer";
import {v4 as uuidv4} from 'uuid';

import {
    FORMULARIO_PROYECTO,
    FORMULARIO_PROYECTO2,
    OBTENER_PROYECTOS,
    AGREGAR_PROYECTO,
    VALIDAR_FORMULARIO,
    PROYECTO_ACTUAL
} from "../../types";



const Proyectostate = (props) => {

    const proyectos = [
        { id: 1, nombre: 'Tienda' },
        { id: 2, nombre: 'Biblioteca' },
        { id: 3, nombre: 'Hotel' }
    ]

    //Estado inicial que tendra la app
    const inicialState = {
        proyectos: [],
        nuevoProyectoF: false,
        errorFormulario: false, 
    }

    //Dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(proyectoReducer, inicialState)

    //Funciones para el CRUD
    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_PROYECTO
        })
    }

    const ocultarFormulario = () => {
        dispatch({
            type: FORMULARIO_PROYECTO2
        })
    }

    const obtenerProyectos = () => {
        dispatch({
            type: OBTENER_PROYECTOS,
            payload: proyectos
        })
    }

    const agregarProyectos = (proyecto) => {
        proyecto.id = uuidv4();
         dispatch({
             type: AGREGAR_PROYECTO,
             payload: proyecto
         })
    }
    
    //Validar formularios por errores
    const mostrarError = () =>{
        dispatch({
            type: VALIDAR_FORMULARIO,
        })
    }

    return (
        <proyectoContext.Provider value={{
            proyectos: state.proyectos,
            nuevoProyectoF: state.nuevoProyectoF,
            errorFormulario: state.errorFormulario,
            mostrarFormulario, ocultarFormulario, obtenerProyectos, agregarProyectos, mostrarError,
        }}>
            {props.children}
        </proyectoContext.Provider>
    )

}

export default Proyectostate;
