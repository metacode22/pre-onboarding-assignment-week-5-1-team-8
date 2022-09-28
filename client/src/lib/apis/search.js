import { SICK } from '../consts';
import http from './base';

export const getRecommends = async q => {
  const response = await http.get({
    url: SICK,
    params: {
      q
    },
  });
  
  return response.data;
};
