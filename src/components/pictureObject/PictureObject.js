import React from 'react';
import './PictureObject.css';

const PictureObject = ({ id, author, imageUrl, onAddToFavorites }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={author} />
      <p>ID: {id}</p>
      <p>Autor: {author}</p>
      <button onClick={onAddToFavorites}>Añadir a Favoritos</button>
    </div>
  );
};

export default PictureObject;
