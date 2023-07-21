import './ShowHome.css'
import { useState, useEffect } from "react";
import {Buttons} from '../1atoms/buttons/Buttons.jsx'
import {Input} from '../1atoms/Input/Input.jsx'
import "../1atoms/Input/Input.css"

const ShowHome = () => {

  const [advertisements, setAdvertisements] = useState([]);
  const [filters, setFilters] = useState({
    type: "",
    category: "",
    localitation: "",
  });

  useEffect(() => {
    fetchAdvertisements();
  }, []);

  const fetchAdvertisements = async () => {
    try {
      const params = new URLSearchParams();
      
      if (filters.type.trim() !== "") {
        params.append("type", filters.type);
      }
      if (filters.category.trim() !== "") {
        params.append("category", filters.category);
      }
      if (filters.localitation.trim() !== "") {
        params.append("localitation", filters.localitation);
      }

      let apiUrl = "http://localhost:4000/advertisments";

      if (params.toString() !== "") {
        apiUrl += "/filter?" + params.toString();
      }

      const response = await fetch(apiUrl);
      const data = await response.json();
      setAdvertisements(data);
    } catch (error) {
      console.error("Error al obtener los anuncios:", error);
    }
  };

  const handleApplyFilters = () => {
    fetchAdvertisements();
  };


  return (
    <div>
      <h1 className='eslogan'>Buscamos el hogar perfecto para ti</h1>
      {/* <div className="btnsComprarAlquilar">
        <Buttons style='btnCTA'  text='Comprar' ruta='/mysearch'/> <Buttons style='btnCTA' text='Alquilar' ruta='/mysearch'/>
      </div> */}
      {/* <Input placeholder='Tipo de vivienda'/>
      <Input placeholder='Lugar de residecia'/> */}
      <input
          type="text"
          name="type"
          placeholder="Type"
          className='input'
          value={filters.type}
          onChange={(e) => setFilters({ ...filters, type: e.target.value })}
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          className='input'
          value={filters.category}
          onChange={(e) => setFilters({ ...filters, category: e.target.value })}
        />
        <input
          type="text"
          name="localitation"
          placeholder="Localitation"
          className='input'
          value={filters.localitation}
          onChange={(e) => setFilters({ ...filters, localitation: e.target.value })}
        />
      <div className="btnBuscar">
      <Buttons onClick={handleApplyFilters} style='btnCTA' text='Buscar' ruta='/mysearch'/>
      </div>
    </div>
  )
}

export default ShowHome;