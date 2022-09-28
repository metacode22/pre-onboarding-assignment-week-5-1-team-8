const cache = new Map();

export const setCache = (key, value) => {
  cache.set(key, value);
  console.info(cache);
};

export const getCache = key => {
  return cache.get(key);
};
