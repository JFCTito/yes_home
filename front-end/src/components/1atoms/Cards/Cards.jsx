import "./Cards.css"
export function Cards(props){

    return(
        <img src={props.img} className={props.style}></img>
    )

}