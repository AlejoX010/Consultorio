import React from 'react';
import NuevoPaciente from '../../projects/NuevoPaciente';
import Listado from '../../projects/Listado';

const Siderbar = () => {
    return (
        <aside>
            <h1>ExDi<span>Consultas</span></h1>
            <NuevoPaciente/>
            <div className="proyectos">
                <h2>Pacientes</h2>
                <Listado/>
            </div>
        </aside>
    );
}

export default Siderbar;
