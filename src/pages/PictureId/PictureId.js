import Navbar from '../../components/navbar/Navbar'
import React, { useState, useEffect } from 'react';
import { LoremPicsumService } from '../../services/LoremPicsumService';
import PictureObject from '../../components/pictureObject/PictureObject';
import logo from '../../assets/img/logo.svg';

const PicturesId = () => {
  
  const [images, setImages] = useState([]);
  const [selectedImageId, setSelectedImageId] = useState(null); // Estado para el ID de la imagen seleccionada

  useEffect(() => {
    const loremPicsumService = LoremPicsumService();

    loremPicsumService.getAll()
      .then(response => {
        setImages(response.data);
        setSelectedImageId(response.data[0]?.id); // Establece el ID de la primera imagen como predeterminado
      })
      .catch(error => {
        console.error('Error in getAll:', error);
      });
  }, []);

  const handleChangeImage = (newImageId) => {
    setSelectedImageId(newImageId);
  };

  return (
    <div>
      <img className='logo' src={logo} alt="logo of the app" />
      <h1>Pictures Page</h1>
      <Navbar/>
      
      <div className="card-container">
        {selectedImageId && (
          <PictureObject
            key={selectedImageId}
            id={selectedImageId}
            author={images.find(image => image.id === selectedImageId)?.author}
            imageUrl={images.find(image => image.id === selectedImageId)?.download_url}
          />
        )}
      </div>
      
      <div className="image-navigation">
        {images.map(image => (
          <button
            key={image.id}
            onClick={() => handleChangeImage(image.id)}
          >
            Show Image {image.id}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PicturesId;
