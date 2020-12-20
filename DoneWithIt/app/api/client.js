import { create } from 'apisauce';
import storage from '../auth/storage';
import cache from '../utility/cache';

const apiClient = create({
  baseURL: 'http://192.168.100.65:9000/api',
});

apiClient.addAsyncRequestTransform(async (request) => {
  const authToken = await storage.getToken();

  if (!authToken) return;
  request.headers['x-auth-token'] = authToken;
});

// making new get method for caching for offline
const get = apiClient.get;
apiClient.get = async (url, params, axiosConfig) => {
  const response = await get(url, params, axiosConfig);

  if (response.ok) {
    cache.store(url, response, data); // caching every reqyuest
    return response;
  }

  const data = await cache.get(url);
  return data ? { ok: true, data } : response;
};

export default apiClient;
