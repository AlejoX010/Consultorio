import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    //State para iniciar sesion
    const [usuario, guardarUsuario] = useState({
        email: '',
        password: ''
    });

    //Datos que se extraen del usuario
    const { email, password } = usuario;

    const onChange = (e) => {
        guardarUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }


    // Lo que pasara despues de que el usuario quiera precionar el botón (validacines)
    const onSubmit = e => {
        e.preventDefault()

        //Validar que no haya campos vacios

        //Pasarlo al action 
    }

    return (
        <div className='form-usuario'>
            <div className='contenedor-form sombra-dark'>
                <h1>Iniciar Sesion</h1>
                <form onSubmit={onSubmit}>
                    <div className='campo-form'>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name='email' placeholder='E-mail' onChange={onChange} value={email} />
                    </div>

                    <div className='campo-form'>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name='password' placeholder='Password' onChange={onChange} value={password} />
                    </div>

                    <div className='campo-form'>
                        <input type="submit" className='btn btn-primario btn-block' value="Iniciar Sesion" />
                    </div>
                </form>

                <Link to={'/nueva-cuenta'} className='enlace-cuenta'>Obtener Cuenta</Link>
            </div>
        </div>
    );
}

export default Login;
