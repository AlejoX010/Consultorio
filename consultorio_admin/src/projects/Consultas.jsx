import React from 'react';
import Barra from '../components/layout/Barra';
import Siderbar from '../components/layout/Siderbar';
import Formtarea from '../components/tasks/FormTarea';
import Listadotareas from '../components/tasks/ListadoTareas';

const Consultas = () => {
    return (
        <div className='contenedor-app'>
            {/* Este sera el lado izquierdo de la app */}

            <Siderbar />

            {/* Este es el lado derecho */}
            <div className="seccion-principal">
                <Barra />
                <main>
                    <Formtarea/>
                    <div className="contenedor-tareas">
                        <Listadotareas/>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Consultas;
