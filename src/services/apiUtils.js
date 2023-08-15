import axios from 'axios';

const baseURL = 'https://picsum.photos'; 

const makeRequest = (method, url, data = null) => {
  return axios[method](baseURL + url, data);
};

export default makeRequest;
