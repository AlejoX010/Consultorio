import React from 'react';
import Tarea from './Tarea'

const Listadotareas = () => {

    const tareasMaterias = [
        {
            nombre: 'Introducir los datos',
            estado: true
        },

        {
            nombre: 'Hacer un CRUD',
            estado: false
        }
    ]

    return (
        <div>
            <h2>Proyecto: Hacer la base de datos de Cliente</h2>
            <ul className='listado-tareas'>
                {tareasMaterias.length === 0 ? <li className='tarea'><p>No hay Tareas</p></li> : tareasMaterias.map(tarea => (<Tarea tarea={tarea} />))}
            </ul>
            <button type='button' className='btn btn-eliminar'>Eliminar Proyecto</button>
            <p className='copy'>&copy;Anuar Hernandez</p>
        </div>
    );
}

export default Listadotareas;
