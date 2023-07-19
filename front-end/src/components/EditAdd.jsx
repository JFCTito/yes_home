import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';


const url = "http://localhost:8080/add"

const EditAdd = () => {
    const [add, setAdd] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const { addId } = useParams();

    useEffect(() => {
        const fetchAdd = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(`${url}/${addId}`);
                if (response.ok) {
                    const data = await response.json();
                    setAdd(data);
                } else {
                    throw new Error('Error al obtener los datos');
                }
            } catch (error) {
                setError(error.message);
            }
            setIsLoading(false);
        };

        fetchAdd();
    }, [addId]);

    const handleInputChange = (event) => {
        setAdd({ ...add, [event.target.name]: event.target.value });
    };

    const goBack = () => {
        navigate("/");
    }

    const handleEditAdd = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        try {
            await fetch(`${url}/${addId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(add)
            });
            navigate('/');
        } catch (error) {
            setError(error.message);
        }
        setIsLoading(false);
    };

    if (isLoading) {
        return <p>Cargando...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }


    /* cambiear a valores necesarios */
    return (
        <div>
            <div className="form">
                <h2>Editar Add</h2>
                <form onSubmit={handleEditAdd}>
                    <div>
                        <label htmlFor="name">Nombre:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={add.name || ''}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="img">Imagen:</label>
                        <input
                            type="text"
                            id="img"
                            name="img"
                            value={add.img || ''}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="description">Descripción:</label>
                        <input
                            type="text"
                            id="description"
                            name="description"
                            value={add.description || ''}
                            onChange={handleInputChange}
                        />
                    </div>
                    <button type="submit">Guardar cambios</button>
                    <button type="button" onClick={goBack}>Cancelar</button>
                </form>
            </div>
        </div>
    );
};

export default EditAdd;