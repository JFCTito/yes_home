import "./ImgAdd.css"
export function ImgAdd(props){

    return(
        <img src={props.img} className={props.style}></img>
    )

}