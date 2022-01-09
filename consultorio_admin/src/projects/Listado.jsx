import { useContext, useEffect } from 'react';
import Tarea from './Tarea';
import proyectoContext from '../context/proyectos/proyectoContext';


const Listado = () => {

    //Extrae los proyectos
    const proyectosContext = useContext(proyectoContext)
    const { proyectos, obtenerProyectos } = proyectosContext

    //Este effect es para optener proyectos cuando carga el componente
    useEffect(() => {
        obtenerProyectos()
    }, []);

    if (proyectos.length === 0) (null)

    return (
        <ul className='listado-proyectos'>
            {proyectos.map(proyecto => (<Tarea key={proyecto.id} proyecto={proyecto} />))}
        </ul>
    );
}

export default Listado;
