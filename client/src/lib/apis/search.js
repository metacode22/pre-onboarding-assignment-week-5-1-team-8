import { SICK } from '../consts';
import http from './base';

export const getRecommends = async q => {
  if (q === '') return [];

  const response = await http.get({
    url: SICK,
    params: {
      q,
    },
  });

  return response.data;
};
