import React from 'react'
import './FooterBtn.css';

const FooterBtn = (props) => {
  return (
      <div className='footerBtn'>
            <p>{props.text}</p>
            {/* <NavLink to ="/create ">
              <button>Añadir un anuncio</button></NavLink> */}
      </div>
  )
}

export default FooterBtn;