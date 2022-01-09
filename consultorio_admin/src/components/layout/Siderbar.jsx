import React from 'react';
import Nuevamateria from '../../projects/NuevaMateria';
import Listado from '../../projects/Listado';

const Siderbar = () => {
    return (
        <aside>
            <h1>ExDi<span>ProjectS</span></h1>
            <Nuevamateria/>
            <div className="proyectos">
                <h2>Proyectos</h2>
                <Listado/>
            </div>
        </aside>
    );
}

export default Siderbar;
