import { useState, useContext } from 'react';
import proyectoContext from '../context/proyectos/proyectoContext';


const Nuevamateria = () => {

    //El state para el formulario de nuevo proyecto
    const proyectosContext = useContext(proyectoContext)
    //Extraccion de los estados
    const { nuevoProyectoF, mostrarFormulario, ocultarFormulario, agregarProyectos, mostrarError, errorFormulario} = proyectosContext

    //State para las Materias
    const [proyecto, guardarProyecto] = useState({
        nombre: '',
        tds: '',
        sexo: ''
    });

    const { nombre, tds, sexo } = proyecto

    //Lee el contenido del input y lo guarda en el estate
    const onChangeMateria = (e) => {
        guardarProyecto({
            ...proyecto,
            [e.target.name]: e.target.value
        })
    }

    //Esto es lo que pasara cuando se puche el boton de enviar materia
    const onSubmitProyecto = (e) => {
        e.preventDefault()

        //Validacion de la materia
        if (nombre === '' || nombre === undefined || tds === '' || tds === undefined || sexo === '' || sexo === undefined) {
            mostrarError()
            return;
        }

        //Agregar al state
        agregarProyectos(proyecto)

        //Reiniciar el form
        guardarProyecto ( [{
            nombre: '',
            tds: '',
            sexo: ''
        }
        ]  )
       
    }
 
    return (
        <div >
            {/* Este es el boton para que muestre el formulario */}
            {nuevoProyectoF ?
                <button type='button' className='btn btn-block btn-primario2'
                    onClick={() => ocultarFormulario()}
                >Cancelar</button> :
                <button type='button' className='btn btn-block btn-primario'
                    onClick={() => mostrarFormulario()}
                >Nuevo Paciente</button>}

            {/* Este es para agregar uno nuevo */}
            {nuevoProyectoF &&
                (<form className='formulario-nuevo-proyecto'> 

                    <input type="text" className='input-text' placeholder='Nombre' name='nombre'
                        onChange={onChangeMateria}
                        value={nombre}
                    />
                     <input type="text" className='input-text' placeholder='Tipo de Sangre' name='tds'
                         onChange={onChangeMateria}
                         value={tds}
                    />
                     <input type="text" className='input-text' placeholder='Sexo' name='sexo'
                         onChange={onChangeMateria}
                         value={sexo}
                    />

                    <button type="button" className='btn btn-block btn-primario' onClick={onSubmitProyecto}>Agregar Paciente</button>
                </form>)}

                {/* Diseño para el error a la hora de validar */}
                {errorFormulario && <p className='mensaje error'>Campos Incompletos</p>}
        </div>
    );
}

export default Nuevamateria;
