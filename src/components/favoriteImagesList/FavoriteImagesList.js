import React, { useState, useEffect } from 'react';
import FavoriteService from '../../services/FavoriteService';
import './FavoriteImagesList.css'; // Importa tus estilos aquí

const FavoriteImagesList = () => {
  const [favoriteImages, setFavoriteImages] = useState([]);

  const fetchData = () => {
    FavoriteService.getAll()
      .then(response => {
        setFavoriteImages(response.data);
      })
      .catch(error => {
        console.error('Error fetching favorite images:', error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleRemoveFavorite = (id) => {
    FavoriteService.remove(id)
      .then(() => {
        setFavoriteImages(prevFavorites => prevFavorites.filter(image => image.id !== id));
      })
      .catch(error => {
        console.error('Error removing favorite:', error);
      });
  };

  const handleCreateFavorite = () => {
    FavoriteService.create({})
      .then(() => {
        fetchData();
      })
      .catch(error => {
        console.error('Error creating favorite:', error);
      });
  };

  return (
    <div className="favorite-images-list">
      <button className="create-button" onClick={handleCreateFavorite}>Crear Favorito</button>
      <ul className="image-list">
        {favoriteImages.map(image => (
          <li key={image.id} className="image-item">
            <img className="image" src={image.download_url} alt={image.author} />
            <p className="image-info">ID: {image.id}</p>
            <p className="image-info">Author: {image.author}</p>
            <div className="edit-delete">
              <button className="edit-button">Editar</button>
              <button className="delete-button" onClick={() => handleRemoveFavorite(image.id)}>Eliminar</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoriteImagesList;
