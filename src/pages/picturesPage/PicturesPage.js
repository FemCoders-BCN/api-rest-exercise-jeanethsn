import React, { useState, useEffect } from 'react';
import Navbar from '../../components/navbar/Navbar';
import { LoremPicsumService } from '../../services/LoremPicsumService';
import PictureObject from '../../components/pictureObject/PictureObject';
import logo from '../../assets/img/logo.svg';
import FavoriteService from '../../services/FavoriteService';

const PicturesPage = () => {
  const [images, setImages] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const loremPicsumService = LoremPicsumService();

    loremPicsumService.getAll()
      .then(response => {
        setImages(response.data);
      })
      .catch(error => {
        console.error('Error in getAll:', error);
      });
  }, []);

  const handleAddToFavorites = (id) => {
    const selectedImage = images.find(image => image.id === id);
    if (selectedImage) {
      FavoriteService.create(selectedImage)
        .then(() => {
          setFavorites(prevFavorites => [...prevFavorites, selectedImage]);
        }) 
        .catch(error => {
          console.error('Error adding to favorites:', error);
        });
    }
  };

  return (
    <div>
      <img className='logo' src={logo} alt="logo of the app" />
      <h1>Pictures Page</h1>
      <Navbar/>

      <div className="card-container">
        {images.map(image => (
          <PictureObject
            key={image.id}
            id={image.id}
            author={image.author}
            imageUrl={image.download_url}
            onAddToFavorites={handleAddToFavorites}
          />
        ))}
      </div>
    </div>
  );
};

export default PicturesPage;
