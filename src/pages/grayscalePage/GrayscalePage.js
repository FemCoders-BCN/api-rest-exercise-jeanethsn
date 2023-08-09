import React, { useState, useEffect } from 'react';
import { LoremPicsumService } from '../../services/LoremPicsumService';
import Navbar from '../../components/navbar/Navbar';

const RandomGrayscaleImagePage = () => {
  const [imageData, setImageData] = useState(null);

  useEffect(() => {
    const loremPicsumService = LoremPicsumService();

    loremPicsumService.getRandomGrayscale('200/300') // Tamaño de la imagen
      .then(response => {
        setImageData(response.data);
      })
      .catch(error => {
        console.error('Error in getRandomGrayscale:', error);
      });
  }, []);

  return (
    <div>
      <h1>Random Grayscale Image Page</h1>
      <Navbar />

      <div className="random-image-container">
        {imageData && (
          <>
            <img src={imageData.url} alt="Random Grayscale Img" />
            <p>ID: {imageData.id}</p>
            <p>Autor: {imageData.author}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default RandomGrayscaleImagePage;
