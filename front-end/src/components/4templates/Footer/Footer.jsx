import React from 'react'
import './Footer.css';
import FooterBtn from './FooterBtn/FooterBtn';
import Logo from '../../1atoms/Logo/Logo';

const Footer = () => {
  return (
      <div className='footer'>
        <div className="footerNav">
<Logo />
            <div className="footerNavLinks">
              <ul className='footerNavLinksUl'>
                <li><a href="#"><FooterBtn text = "Quienes somos"/></a></li>
                <li><a href="#"><FooterBtn text = "Dónde estamos"/></a></li>
                <li><a href="#"><FooterBtn text = "Alquiler o Compra"/></a></li>
              </ul>
              <ul className='footerNavLinksUl'>
                <li><a href="#"><FooterBtn text = "Gestión de cookies"/></a></li>
                <li><a href="#"><FooterBtn text = "Ayuda al cliente"/></a></li>
                <li><a href="#"><FooterBtn text = "Contáctanos"/></a></li>
              </ul>
            </div>
          </div>

           <div className='copyright'>
            <p>&copy; Todos los derechos reservados.</p>
            {/* <NavLink to ="/create ">
              <button>Añadir un anuncio</button></NavLink> */}
      
          </div>
        </div>
  )
}

export default Footer;