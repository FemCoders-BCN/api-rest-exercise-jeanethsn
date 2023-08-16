import makeRequest from './apiUtils';

export const LoremPicsumService = () => {
  const baseURL = 'https://picsum.photos';
  const urls = {
    getAll: '/v2/list',
    getById: (id, size) => `/id/${id}/${size}`,
    getRandomGrayscale: (size) => `/${size}?grayscale`,
  };

  return {
    getAll: () => makeRequest(baseURL, 'get', urls.getAll),
    getById: (id, size) => makeRequest(baseURL, 'get', urls.getById(id, size)),
    getRandomGrayscale: (size) => makeRequest(baseURL, 'get', urls.getRandomGrayscale(size)),
  };
};
