import './ShowHome.css'
import {Buttons} from '../1atoms/buttons/Buttons.jsx'

const ShowHome = () => {
  return (
    <div>
      <h1 className='eslogan'>Buscamos el hogar perfecto para ti</h1>
      <div className="btnsComprarAlquilar">
      <Buttons style='btnCTA'  text='Comprar' ruta='/mysearch'/> <Buttons style='btnCTA' text='Alquilar' ruta='/mysearch'/>
      </div>
    </div>
  )
}

export default ShowHome;