import { useState, useEffect } from "react";
import { ImgAdd } from "../1atoms/ImgAdd/ImgAdd.jsx";
import { TitleAdd } from "../1atoms/TitleAdd/TitleAdd.jsx";
import { PriceAdd } from "../1atoms/PriceAdd/PriceAdd.jsx";
import { LocationAdd } from "../1atoms/LocationAdd/LocationAdd.jsx";
import "../1atoms/Input/Input.css";
import "../5pages/ShowAds.css";
import { Buttons } from "../1atoms/buttons/Buttons.jsx";

function ShowAds() {
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
    <div className="mysearchBgd">
      <h1>Lista de Anuncios</h1>
      <div className="searchContainer">
        <input
          type="text"
          name="type"
          placeholder="Type"
          className="input2"
          value={filters.type}
          onChange={(e) => setFilters({ ...filters, type: e.target.value })}
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          className="input2"
          value={filters.category}
          onChange={(e) => setFilters({ ...filters, category: e.target.value })}
        />
        <input
          type="text"
          name="localitation"
          placeholder="Localitation"
          className="input2"
          value={filters.localitation}
          onChange={(e) =>
            setFilters({ ...filters, localitation: e.target.value })
          }
        />
        {/* <button onClick={handleApplyFilters}>Aplicar Filtros</button> */}
        <Buttons
          onClick={handleApplyFilters}
          style="btnCTA"
          text="Apply Filters"
          ruta="/mysearch"
          id="mysearchButton"
        />
      </div>
      <ul>
        {advertisements.map((ad) => (
          <li key={ad.id}>
            <ImgAdd img={ad.img} style="cardsSmall"></ImgAdd>
            <TitleAdd title={ad.title} style="titleAdd"></TitleAdd>
            <PriceAdd detail={ad.price} style="priceAdd"></PriceAdd>
            <LocationAdd
              location={ad.localitation}
              style="locationAdd"
            ></LocationAdd>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShowAds;
