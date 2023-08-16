import React from 'react';
import './PictureObject.css';
import Button from '../button/button';

const PictureObject = ({ id, author, imageUrl, onAddToFavorites }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={author} />
      <p>ID: {id}</p>
      <p>Autor: {author}</p>

      <Button className='action-buttons' text='Añadir a Favoritos' onClick={() => onAddToFavorites(id)} />
    </div>
  );
};

export default PictureObject;
