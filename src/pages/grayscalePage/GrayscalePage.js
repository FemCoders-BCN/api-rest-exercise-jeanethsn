import React, { useState, useEffect } from 'react';
import logo from '../../assets/img/logo.svg';
import Navbar from '../../components/navbar/Navbar';

const GrayscalePage = () => {
  const [imageURL, setImageURL] = useState('');
  const [imageAuthor, setImageAuthor] = useState('');
  const [imageId, setImageId] = useState('');

  const getRandomGrayscaleImage = () => {
    const randomTimestamp = Date.now();
    const grayscaleURL = `https://picsum.photos/200/300?grayscale&random=${randomTimestamp}`;
    setImageURL(grayscaleURL);
    setImageAuthor('Unknown'); // Puedes establecer un valor predeterminado si la información no está disponible
    setImageId('Unknown');
  };

  useEffect(() => {
    getRandomGrayscaleImage(); // Llamada inicial para generar la primera imagen
  }, []);

  return (
    <div>
      <img className='logo' src={logo} alt="logo of the app" />
      <h1>Grayscale Image Page</h1>
      <Navbar />
      <div>
        <img src={imageURL} alt="Grayscale Image" />
        <button onClick={getRandomGrayscaleImage}>Get Random Grayscale Image</button>
      </div>
    </div>
  );
};

export default GrayscalePage;
