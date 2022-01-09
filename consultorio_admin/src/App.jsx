import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/auth/Login'
import NuevaCuenta from './components/auth/NuevaCuenta'
import Consultas from './projects/Consultas'
import Proyectostate from './context/proyectos/proyectoState'

function App() {


  return (
    <div className="App">
      <Proyectostate> {/*Esto se pone asi para que todo herede lo que tengo ahi*/}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/nueva-cuenta" element={<NuevaCuenta />} />
            <Route path="/consultas" element={<Consultas />} />
          </Routes>
        </BrowserRouter> 
      </Proyectostate>
    </div>
  )
}

export default App
