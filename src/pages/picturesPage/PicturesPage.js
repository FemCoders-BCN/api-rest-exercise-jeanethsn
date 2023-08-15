import Navbar from '../../components/navbar/Navbar'
import React, { useState, useEffect } from 'react';
import { LoremPicsumService } from '../../services/LoremPicsumService';
import PictureObject from '../../components/pictureObject/PictureObject';
import logo from '../../assets/img/logo.svg';

const PicturesPage = () => {
  
  const [images, setImages] = useState([]);

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

  return (
    <div>
      <img className='logo' src={logo} alt="logo of the app" />
      <h1>Pictures Page</h1>
      <Navbar/>
      
      <div className="card-container">
        {images.map(image => (
          <PictureObject key={image.id} id={image.id} author={image.author} imageUrl={image.download_url} />
        ))}
      </div>
    </div>
  );
};

export default PicturesPage;
