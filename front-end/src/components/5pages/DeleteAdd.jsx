import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const url = "http://localhost:8080/ads"
const DeleteAdd = () => {

    const [add, setAdd] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const { addId } = useParams();

    useEffect(() => {
        const fetchAdd = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get(`${url}/${addId}`);
                setAdd(response.data);
            } catch (error) {
                setError(error.message);
            }
            setIsLoading(false);
        };

        fetchAdd();
    }, [addId]);

    const goBack = () => {
        navigate("/");
    }
    const handleDeleteAdd = async () => {
        setIsLoading(true);
        try {
            await fetch(`${url}/${characterId}`, {
                method: 'DELETE'
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

    return (
        <div>
            <div className="form">
                <h2>Eliminar Ad {character.name} </h2>
                <p>mensaje confirmacion</p>
                <button onClick={handleDeleteAdd}>Eliminar</button>
                <button type="button" onClick={goBack}>Cancelar</button>
            </div>
        </div>
    );
};

export default DeleteAdd;