// LoremPicsumService.js
import makeRequest from './apiUtils';

export const LoremPicsumService = () => {
  const urlGetAll = '/v2/list';
  const urlGetById = '/id/{image}/{size}';
  const urlGetGrayscale = '/{size}?grayscale';

  return {
    getAll: () => makeRequest('get', urlGetAll),
    getById: (id, size) => makeRequest('get', `${urlGetById}/${id}/${size}`),
    getRandomGrayscale: (size) => {
      const url = urlGetGrayscale.replace('{size}', size);
      return makeRequest('get', url);
    },
  };
};
