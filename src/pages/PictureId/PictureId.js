import Navbar from '../../components/navbar/Navbar';
import React, { useState, useEffect } from 'react';
import { LoremPicsumService } from '../../services/LoremPicsumService';
import PictureObject from '../../components/pictureObject/PictureObject';
import logo from '../../assets/img/logo.svg';
import Button from '../../components/button/button';
import './PictureId.css'; // Agrega el archivo de estilos CSS

const PicturesId = () => {
  
  const [images, setImages] = useState([]);
  const [selectedImageId, setSelectedImageId] = useState(null);

  useEffect(() => {
    const loremPicsumService = LoremPicsumService();

    loremPicsumService.getAll()
      .then(response => {
        setImages(response.data);
        setSelectedImageId(response.data[0]?.id);
      })
      .catch(error => {
        console.error('Error in getAll:', error);
      });
  }, []);

  const handleChangeImage = (newImageId) => {
    setSelectedImageId(newImageId);
  };

  return (
    <div className='pictures-page-container'>
      <img className='logo' src={logo} alt="logo of the app" />
      <h1>Pictures Page</h1>
      <Navbar/>
      
      <div className="picture-container">
        {selectedImageId && (
          <PictureObject
            key={selectedImageId}
            id={selectedImageId}
            author={images.find(image => image.id === selectedImageId)?.author}
            imageUrl={images.find(image => image.id === selectedImageId)?.download_url}
          />
        )}
      </div>
      
      <div className="button-navigation">
        {images.map(image => (
          <Button className='action-buttons' 
            text={image.id} key={image.id} onClick={() => handleChangeImage(image.id)} />
        ))}
      </div>
    </div>
  );
};

export default PicturesId;
