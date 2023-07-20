import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import CardAdd from "../3organisms/CardAdd.jsx"

function ShowAds() {

    const [add, setAdd] = useState([]);
    const navigate = useNavigate();


    const [addList, setAddList] = useState([]);
    const [selectedAdd, setSelectedAdd] = useState(null);

    useEffect(() => {
        fetch('http://localhost:4000/advertisments')
            .then(response => response.json())
            .then(data => setAddList(data.data))
            .catch(error => console.log(error));
    }, []);

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
        <div className="addContainer">
            {
                cards
            }
        </div>
    )
}
export default ShowAds;