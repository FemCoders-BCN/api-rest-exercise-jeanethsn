import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { LoremPicsumService } from '../../services/LoremPicsumService';

const PictureId = () => {
  const [searchId, setSearchId] = useState('');
  const [image, setImage] = useState(null);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    if (!searchId) {
      // Si no hay un ID de búsqueda, no hacemos nada
      setImage(null);
      return;
    }

    const loremPicsumService = LoremPicsumService();

    loremPicsumService.getById(searchId)
      .then(response => {
        setImage(response.data);
        setError(null);
      })
      .catch(error => {
        console.error('Error fetching image by ID:', error);
        setImage(null);
        setError('Image not found.');
      });
  }, [searchId]);

  return (
    <div>
      <h2>Image Detail</h2>

      <form onSubmit={e => {
        e.preventDefault();
        setSearchId(''); // Esto restablecerá el campo de búsqueda después de la búsqueda
      }}>
        <label>
          Enter Image ID:
          <input
            type="text"
            value={searchId}
            onChange={e => setSearchId(e.target.value)}
          />
        </label>
        <button type="submit">Search</button>
      </form>

      {error && <p className="error">{error}</p>}

      {image ? (
        <>
          <p>ID: {image.id}</p>
          <p>Author: {image.author}</p>
          <img src={image.download_url} alt={image.author} />
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default PictureId;