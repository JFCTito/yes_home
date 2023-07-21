import "./Buttons.css";
import { Link } from "react-router-dom";

export const Buttons = (props) => {
  return (
    <Link to={props.ruta}>
      <button className={`btnStyles ${props.style}`} id={props.id}>
        <p>{props.text}</p>
      </button>
    </Link>
  );
};
