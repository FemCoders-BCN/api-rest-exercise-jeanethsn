import axios from 'axios';

const makeRequest = (baseURL, method, url, data = null) => {
  return axios[method](baseURL + url, data);
};

export default makeRequest;