import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { LoremPicsumService } from '../../services/LoremPicsumService';

const IdPage = () => {
  const { id } = useParams();
  const [image, setImage] = useState(null);

  useEffect(() => {
    const loremPicsumService = LoremPicsumService();

    loremPicsumService.getById(id) // Cambia el nombre del método según tu servicio
      .then(response => {
        setImage(response.data);
      })
      .catch(error => {
        console.error('Error fetching image by ID:', error);
      });
  }, [id]);

  if (!image) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Image Detail</h2>
      <p>ID: {image.id}</p>
      <p>Author: {image.author}</p>
      <img src={image.download_url} alt={image.author} />
    </div>
  );
};

export default IdPage;
