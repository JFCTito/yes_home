export default function FullInfoCardAdd (props) {
    
    const add = props.add;
    
    return (
        <>
        <div className="fullcard">
            {/* poner toda la info que tenga la API */}
            <img src ={add.img} alt="" className="img"/> 
            <div className="contaider-fulldata">
                <h3>{add.titulo}</h3>
                <p>{add.description}</p>
            </div>
            <div className="contact">
                <button onClick={() => props.contactAdd(add) }> Contactar </button>
            </div>
        </div>
        </>
    )
}