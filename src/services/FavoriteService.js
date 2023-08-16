import makeRequest from './apiUtils';

const FavoriteService = {
  baseURL: 'http://localhost:3005',
  url: '/favorites',

  getAll: () => makeRequest(FavoriteService.baseURL, 'get', FavoriteService.url),
  getById: (id) => makeRequest(FavoriteService.baseURL, 'get', `${FavoriteService.url}/${id}`),
  create: (data) => makeRequest(FavoriteService.baseURL, 'post', FavoriteService.url, data),
  remove: (id) => makeRequest(FavoriteService.baseURL, 'delete', `${FavoriteService.url}/${id}`),
  update: (id, data) => makeRequest(FavoriteService.baseURL, 'put', `${FavoriteService.url}/${id}`, data),
};

export default FavoriteService;
