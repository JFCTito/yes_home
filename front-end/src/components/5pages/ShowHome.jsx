import './ShowHome.css'
import {Buttons} from '../1atoms/buttons/Buttons.jsx'
import {Input} from '../1atoms/Input/Input.jsx'

const ShowHome = () => {
  return (
    <div>
      <h1 className='eslogan'>Buscamos el hogar perfecto para ti</h1>
      <div className="btnsComprarAlquilar">
        <Buttons style='btnCTA'  text='Comprar' ruta='/mysearch'/> <Buttons style='btnCTA' text='Alquilar' ruta='/mysearch'/>
      </div>
      <Input placeholder='Tipo de vivienda'/><Input placeholder='Lugar de residecia'/>
      <div className="btnBuscar">
      <Buttons style='btnCTA'  text='Buscar' ruta='/mysearch'/>
      </div>
    </div>
  )
}

export default ShowHome;