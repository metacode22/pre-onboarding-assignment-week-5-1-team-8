import axios from 'axios';
import { BASE_URL, HTTP_METHODS } from '../consts';

const axiosInstance = axios.create({
  url: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const createApiMethod = (axiosInstance, methodType) => config => {
  return axiosInstance({ ...config, method: methodType });
};

const http = {
  get: createApiMethod(axiosInstance, HTTP_METHODS.GET),
};

export default http;
