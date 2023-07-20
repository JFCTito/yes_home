import React from "react";
import "./Logo.css";

function Logo (props){
    return(
        /*Hay que meter un figure como padre?*/
        <figure className="logoContainer">
            <a href="" className="ancleLogo"></a>
            <img src={props.src} alt="Logo de YesHome" className="logoNav" />
        </figure>
    )
}
export default Logo