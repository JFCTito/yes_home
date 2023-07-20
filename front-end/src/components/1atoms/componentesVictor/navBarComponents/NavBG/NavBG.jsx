import React from "react";
import "./NavBG.css";

function NavBG(props){
    return(
        <nav className="navContainer">
            {props.children}
        </nav>
    )
}
export default NavBG