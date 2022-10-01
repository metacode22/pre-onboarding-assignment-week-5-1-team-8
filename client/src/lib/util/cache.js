const cache = new Map();

export const setCache = (key, value) => {
  cache.set(key, value);
};

export const getCache = key => {
  return cache.get(key);
};
