import React from 'react'
import './PictureObject.css'; 


const PictureObject = ({ id, author, imageUrl }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={author} />
      <p>ID: {id}</p>
      <p>Autor: {author}</p>
    </div>
  );
};

export default PictureObject;
 

