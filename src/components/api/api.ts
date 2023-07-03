import axios from 'axios';

const DEFAULT_TIMEOUT = 10000; // 10s

export const createApi = () => {
  const api = axios.create({
    baseURL: 'https://rickandmortyapi.com/api',
    withCredentials: true,
    headers: { 'Content-Type': 'application/json' },
    timeout: DEFAULT_TIMEOUT,
  });

  api.interceptors.request.use(
    ({ ...config }) => {
      if (__DEV__) console.log(config.method, config.url);
      return {
        ...config,
      };
    },
    error => Promise.reject(error)
  );

  api.interceptors.response.use(response => {
    if (__DEV__ && response?.request?._hasError && response.status === 200) {
      const errorString = `special error detected for ${response?.config?.url}, throwing error: ${response?.data}`;
      console.warn(errorString, '_hasError', response.request._hasError);
    }
    return response;
  });

  return api;
};

export const defaultApi = createApi();
