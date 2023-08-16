import React from 'react';
import FavoriteImagesList from '../../components/favoriteImagesList/FavoriteImagesList';
import Navbar from '../../components/navbar/Navbar';


const FavoritesPage = () => {
  return (
    <div>
      <h1>Favorite Images Page</h1>
      <Navbar/>
      <FavoriteImagesList
       />
    </div>
  );
};

export default FavoritesPage;
