import React from "react";
import "./Logo.css";

function Logo (props){
    return(
        /*Hay que meter un figure como padre?*/
        <img src={props.src} alt="Logo de YesHome" className="logoNav" />
    )
}
export default Logo