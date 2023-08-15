// FavoriteService.js
import makeRequest from './apiUtils';

export const FavoriteService = () => {
  const url = '/favorites'; // Cambia esto a tu endpoint correcto proporcionado por json-server

  return {
    getAll: () => makeRequest('get', url),
    getById: (id) => makeRequest('get', `${url}/${id}`),
    create: (data) => makeRequest('post', url, data),
    update: (id, data) => makeRequest('put', `${url}/${id}`, data),
    remove: (id) => makeRequest('delete', `${url}/${id}`),
  };
};
