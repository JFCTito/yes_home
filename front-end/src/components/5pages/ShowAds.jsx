import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import CardAdd from "../3organisms/CardAdd.jsx"
import { Cards } from '../1atoms/Cards/Cards.jsx';

function ShowAds() {

    // const [add, setAdd] = useState([]);
    // const navigate = useNavigate();


    // const [addList, setAddList] = useState([]);
    // const [selectedAdd, setSelectedAdd] = useState(null);

    // useEffect(() => {
    //     fetch('http://localhost:4000/advertisments')
    //         .then(response => response.json())
    //         .then(data => setAddList(data.data))
    //         .catch(error => console.log(error));
    // }, []);

    // const handleEditAdd = (add) => {
    //     navigate(`/edit/${add.id}`)
    // };

    // const handleDeleteAdd = (add) => {
    //     navigate(`/delete/${add.id}`);
    // };

    // const cards = add.map((add) => <CardAdd
    //     key={add.id}
    //     add={add}
    //     editAdd={handleEditAdd}
    //     deleteAdd={handleDeleteAdd}
    // />);

    // return (
    //     <div className="addContainer">
    //         {
    //             cards
    //         }
    //     </div>
    // )

    const [advertisements, setAdvertisements] = useState([]);

    useEffect(() => {
      // Función para realizar la petición a la API
      const fetchAdvertisements = async () => {
        try {
          const response = await fetch("http://localhost:4000/advertisments");
          const data = await response.json();
          setAdvertisements(data);
        } catch (error) {
          console.error("Error al obtener los anuncios:", error);
        }
      };
  
      fetchAdvertisements();
    }, []);
  
    return (
      <div>
        <h1>Lista de Anuncios</h1>
        <ul>
          {advertisements.map((ad) => (
            <li key={ad.id}>
              <Cards img={ad.img} style="cardsSmall"></Cards>
              <h3>{ad.title}</h3>
              <p>{ad.localitation}</p>
              <p>{ad.price}</p>
              <p>{ad.mts2}</p>
              <p>{ad.category}</p>
              <p>{ad.rooms}</p>
              <p>{ad.type}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  

export default ShowAds;