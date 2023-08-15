import React, { useState, useEffect } from 'react';
import logo from '../../assets/img/logo.svg';
import Navbar from '../../components/navbar/Navbar';
import Button from '../../components/button/button';
import './GrayscalePage.css'; // Agrega el archivo de estilos CSS

const GrayscalePage = () => {
  const [imageURL, setImageURL] = useState('');
  const [imageAuthor, setImageAuthor] = useState('');
  const [imageId, setImageId] = useState('');
 

  const getRandomGrayscaleImage = () => {
    const randomTimestamp = Date.now();
    const grayscaleURL = `https://picsum.photos/200/300?grayscale&random=${randomTimestamp}`;
    setImageURL(grayscaleURL);
    setImageAuthor('Unknown');
    setImageId('Unknown');
  };

  useEffect(() => {
    getRandomGrayscaleImage();
  }, []);

  return (
    <div className='centered-container'>
      <img className='logo' src={logo} alt="logo of the app" />
      <h1>Grayscale Image Page</h1>
      <Navbar />
      <div className='grayscale-container'>
        <img src={imageURL} alt="Grayscale Image" />
        <div className='button-container'>
          <Button className='action-buttons' text='Get Random Grayscale Image' onClick={getRandomGrayscaleImage} />
        </div>
      </div>
    </div>
  );
};

export default GrayscalePage;
