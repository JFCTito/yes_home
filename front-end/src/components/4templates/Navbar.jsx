import React from 'react'
import Logo from "../1atoms/componentesVictor/navBarComponents/Logo/Logo.jsx"
import NavBG from "../1atoms/componentesVictor/navBarComponents/NavBG/NavBG.jsx"
import IconUser from "../1atoms/componentesVictor/navBarComponents/IconUser/IconUser.jsx"
const Navbar = (props) => {
  return (
    <NavBG>
        <Logo src={props.source}></Logo>
        <IconUser srcIcon={props.srcIcon}></IconUser>
    </NavBG>
  )
}

export default Navbar