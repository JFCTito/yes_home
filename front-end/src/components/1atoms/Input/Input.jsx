import "./Input.css"
export const Input =(props) => {
    return(
    <div className ="input">
        <label >{props.label}</label>
    <input type="text" id="miInput" name="nombre" placeholder={props.placeholder}></input>
    </div>
    )
}
