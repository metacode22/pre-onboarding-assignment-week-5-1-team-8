import { SICK } from '../consts';
import http from './base';

let apiCount = 0;

export const getRecommends = async q => {
  if (q === '') return [];

  console.info('calling api, apiCount:', ++apiCount);

  const response = await http.get({
    url: SICK,
    params: {
      q,
    },
  });

  return response.data;
};
