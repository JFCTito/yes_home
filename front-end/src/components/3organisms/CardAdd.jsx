export default function CardAdd (props) {
    
    const add = props.add;
    
    return (
        <>
        <div className="card">
            <img src ={add.img} alt="" className="img"/> 
            <div className="contaider-data">
                <h3>{add.title}</h3>
                <p>{add.price}</p>
                <p>card</p>
            </div>
            <div className="more">
                <button onClick={() => props.FullInfoCardAdd(add) }> Mas info </button>
            </div>
        </div>
        </>
    )
}
