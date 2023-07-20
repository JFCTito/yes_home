import "./Buttons.css";
import { Link } from 'react-router-dom';


export const Buttons = (props) => {
    return(
        <Link to={props.ruta}>
            <btn className={`btnStyles ${props.style}`}>
                <p>{props.text}</p>
            </btn>
        </Link>
    )
}
