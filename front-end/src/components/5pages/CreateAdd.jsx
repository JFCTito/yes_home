import { useState } from "react"
import { useNavigate } from "react-router-dom"

const url = "http://localhost:4000/advertisments"

const CreateAdd = () => {

  const [title, setTitle] = useState('')
  const [image, setImage] = useState('')
  const [localitation, setLocalitation] = useState('')
  const [price, setPrice] = useState('')
  const [mts2, setMts2] = useState('')
  const [category, setCategory] = useState('')
  const [rooms, setRooms] = useState('')
  const [type, setType] = useState('')

  const navigate = useNavigate()

  const store = async (e) => {
    e.preventDefault();
    console.log(e);

    try {
      await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: nombre, /* img: imagen, description: descripcion .... todos los que sean necesarios */ })
      });

      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  const goBack = () => {
    navigate("/");
  }

  return (
    <>
      <div className="form">
        <h2>Crear un anuncio</h2>
        <form onSubmit={store}>
          <div>
            <label>Titulo</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            <label>Cuidad</label>
            <input type="text" value={localitation} onChange={(e) => setLocalitation(e.target.value)} />
            <label>Precio</label>
            <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
            <label>Tamaño</label>
            <input type="number" value={mts2} onChange={(e) => setMts2(e.target.value)} />
            <label>Categoria</label>
            <select name="category" id="category" form="categoryform" value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="house">Casa</option>
              <option value="flat">Piso</option>
            </select>
            <label>Imagen</label>
            <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
            <label>Habitaciones</label>
            <input type="number" value={rooms} onChange={(e) => setRooms(e.target.value)} />
            <label>Vender o Alquilar</label>
            <select name="type" id="type" form="typeform" value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="sell">Venta</option>
              <option value="rent">Alquiler</option>
            </select>
          </div>
          <button type="submit">Crear anuncio</button>
          <button type="button" onClick={goBack}>Cancelar</button>
        </form>
      </div>
    </>


  )
}

export default CreateAdd