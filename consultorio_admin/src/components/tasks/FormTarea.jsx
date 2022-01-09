import React from 'react';

const Formtarea = () => {
    return (
        <div>
            <div className="formulario">
                <form>
                    <div className="contenedor-input">
                        <input type="text" className='input-text' placeholder='Tarea...' name='nombre' />
                    </div>
                    <div className="contenedor-input">
                        <input type="submit" className='btn btn-primario btn-block' value='Agregar Tarea' />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Formtarea;
