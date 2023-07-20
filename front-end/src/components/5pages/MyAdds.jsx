export default function MyAdds (props) {
    
    const add = props.add;
    

    const handleEditAdd = (add) => {
        navigate(`/edit/${add.id}`)
    };

    const handleDeleteAdd = (add) => {
        navigate(`/delete/${add.id}`);
    };
    const cards = add.map((add) => <CardAdd
        key={add.id}
        add={add}
        editAdd={handleEditAdd}
        deleteAdd={handleDeleteAdd}
    />);

    return (
        <>
        <div className="card">
            <img src ={add.img} alt="" className="img"/> 
            <div className="contaider-data">
                <h3>{add.titulo}</h3>
                <p>{add.description}</p>
                {/* añadir mas partes */}
            </div>
            <div className="buttons">
                <button onClick={() => props.editAdd(add) }> Editar </button>
                <button onClick={() => props.deleteAdd(add) }> Eliminar </button>
                </div>
        </div>
        </>
    )
}
