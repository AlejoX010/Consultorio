import { useState } from 'react';
import { Link } from 'react-router-dom';

const NuevaCuenta = () => {
        //State para iniciar sesion
        const [usuario, guardarUsuario] = useState({
            nombre: '',
            email: '',
            password: '',
            confirmar: '',
        });
    
        //Datos que se extraen del usuario
        const {nombre, email, password, confirmar } = usuario;
    
        const onChange = (e) => {
            guardarUsuario({
                ...usuario,
                [e.target.name]: e.target.value
            })
        }
    
    
        // Lo que pasara despues de que el usuario quiera precionar el botón (validaciones)
        const onSubmit = e => {
            e.preventDefault()
    
            //Validar que no haya campos vacios

            //Password minimo de 6 caracteres

            //Los 2 Password coincidan
    
            //Pasarlo al action 
        }
    return (
        <div className='form-usuario'>
        <div className='contenedor-form sombra-dark'>
            <h1>Crear Cuenta</h1>
            <form onSubmit={onSubmit}>
            <div className='campo-form'>
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" id="nombre" name='nombre' placeholder='Nombre' onChange={onChange} value={nombre} />
                </div>

                <div className='campo-form'>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name='email' placeholder='E-mail' onChange={onChange} value={email} />
                </div>

                <div className='campo-form'>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name='password' placeholder='Password' onChange={onChange} value={password} />
                </div>

                <div className='campo-form'>
                    <label htmlFor="confirmar">Confirmar Password</label>
                    <input type="password" id="confirmar" name='confirmar' placeholder='Confirmar Password' onChange={onChange} value={confirmar} />
                </div>

                <div className='campo-form'>
                    <input type="submit" className='btn btn-primario btn-block' value="Registrar" />
                </div>
            </form>

            <Link to={'/'} className='enlace-cuenta'>Iniciar Sesion</Link>
        </div>
    </div>
    );
}

export default NuevaCuenta;
