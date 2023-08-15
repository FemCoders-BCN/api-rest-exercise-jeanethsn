// FavoriteImagesList.js

import React, { useState, useEffect } from 'react';
import { FavoriteService } from '../../services/FavoriteService';

const FavoriteImagesList = () => {
  const [favoriteImages, setFavoriteImages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await FavoriteService.getAll();
        setFavoriteImages(response.data);
      } catch (error) {
        console.error('Error fetching favorite images:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
     
      <ul>
        {favoriteImages.map(image => (
          <li key={image.id}>
            <img src={image.imageUrl} alt={image.author} />
            <p>ID: {image.id}</p>
            <p>Author: {image.author}</p>
            {/* Agregar botones de edición y eliminación aquí */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoriteImagesList;
