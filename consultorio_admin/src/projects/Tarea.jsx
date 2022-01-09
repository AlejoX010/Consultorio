import React from 'react';

const Tarea = ({proyecto}) => {
    return (
        <li>
           <button type='button' className='btn btn-blank'>{proyecto.nombre}</button> 
        </li>
    );
}

export default Tarea;
