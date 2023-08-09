import axios from "axios";

axios.defaults.baseURL = 'https://picsum.photos';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';

export const LoremPicsumService = () => {
  const urlGetAll = '/v2/list';
  const urlGetById = '/id/{image}/{size}';
  const urlGetGrayscale = 'https://picsum.photos/200/300?grayscale'; // Usar el endpoint correcto

  const getAll = () => {
    const response = axios.get(urlGetAll);
    return response;
  };

  const getById = (id, size) => {
    const response = axios.get(`${urlGetById}/${id}/${size}`);
    return response;
  };

  const getRandomGrayscale = (size) => {
    const url = urlGetGrayscale.replace('{size}', size);
    const response = axios.get(url);
    return response;
  };

  return {
    getAll,
    getById,
    getRandomGrayscale,
  };
};
