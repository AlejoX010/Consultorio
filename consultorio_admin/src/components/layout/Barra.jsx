import React from 'react';

const Barra = () => {
    return (
        <div>
            <header className="app-header">
                <p className='nombre-usuario'>Hola <span>Nombre</span> </p>
                <nav className='nav-principal'>
                    <a href="#!">Cerrar Sesion</a>
                </nav>
            </header>
        </div>
    );
}

export default Barra;
