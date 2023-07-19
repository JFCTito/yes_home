import { useState } from "react"
import { useNavigate } from "react-router-dom"

const url = "http://localhost:8080/ads"

const CreateAdd = () => {

  const [title, setTitle] = useState('')
  const [img, setImg] = useState('')
  const [description, setDescription] = useState('')

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
            <input type="text" value={title} onChange={(e) => setNombre(e.target.value)} />
          </div>
          {/* Repetir las veces necesarias con todas las categorias o secciones de la API */}
          <button type="submit">Crear anuncio</button>
          <button type="button" onClick={goBack}>Cancelar</button>
        </form>
      </div>
    </>

  )
}

export default CreateAdd